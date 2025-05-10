const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Tournament = require('../models/Tournament');
const jwt = require('jsonwebtoken');

// Middleware para autenticar solicitudes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Formato: Bearer TOKEN

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticación no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido o expirado.' });
  }
};

// Obtener lista de torneos
router.get('/', async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    res.status(200).json(tournaments);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener lista de torneos', error: error.message });
  }
});

// Registrarse en un torneo
router.post('/:id/register', authenticateToken, async (req, res) => {
  try {
    const tournamentId = req.params.id;
    const tournament = await Tournament.findById(tournamentId);

    if (!tournament) {
      return res.status(404).json({ message: 'Torneo no encontrado.' });
    }

    if (tournament.status !== 'Abierto') {
      return res.status(400).json({ message: 'No puedes registrarte en este torneo. Ya no está abierto.' });
    }

    if (tournament.participants.length >= tournament.maxParticipants) {
      return res.status(400).json({ message: 'El torneo ha alcanzado el número máximo de participantes.' });
    }

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    // Agregar usuario a la lista de participantes si no está ya registrado
    if (!tournament.participants.includes(user._id)) {
      tournament.participants.push(user._id);
      await tournament.save();
      // Nota: user.stats.tournamentsPlayed se incrementará cuando el torneo comience o finalice, no al registrarse
    }

    res.status(200).json({ message: 'Registrado en el torneo exitosamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrarse en el torneo', error: error.message });
  }
});

// Obtener detalles de un torneo específico
router.get('/:id', async (req, res) => {
  try {
    const tournamentId = req.params.id;
    const tournament = await Tournament.findById(tournamentId).populate('participants winner');

    if (!tournament) {
      return res.status(404).json({ message: 'Torneo no encontrado.' });
    }

    res.status(200).json(tournament);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener detalles del torneo', error: error.message });
  }
});

module.exports = router;