const express = require('express');
const router = express.Router();
const User = require('../models/User');
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

// Modelo de Torneo (esto debería estar en un archivo separado models/Tournament.js, pero lo simulamos aquí)
// En un entorno real, crearías un modelo adecuado para los torneos.
const tournaments = [
  { 
    id: '1', 
    name: 'Torneo Mensual de Mayo', 
    date: new Date('2025-05-15'), 
    participants: [], 
    status: 'Abierto', 
    maxParticipants: 200,
    winner: null
  },
  { 
    id: '2', 
    name: 'Desafío de Velocidad Semanal', 
    date: new Date('2025-05-10'), 
    participants: [], 
    status: 'En Curso', 
    maxParticipants: 100,
    winner: null
  },
  { 
    id: '3', 
    name: 'Torneo de Primavera', 
    date: new Date('2025-04-20'), 
    participants: [], 
    status: 'Finalizado', 
    maxParticipants: 150,
    winner: 'Velocista123'
  }
];

// Obtener lista de torneos
router.get('/', async (req, res) => {
  try {
    // En un entorno real, obtendrías los datos de la base de datos
    // const tournaments = await Tournament.find();
    res.status(200).json(tournaments);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener lista de torneos', error: error.message });
  }
});

// Registrarse en un torneo
router.post('/:id/register', authenticateToken, async (req, res) => {
  try {
    const tournamentId = req.params.id;
    const tournament = tournaments.find(t => t.id === tournamentId);

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

    // Simulación: agregar usuario a la lista de participantes
    if (!tournament.participants.includes(user._id.toString())) {
      tournament.participants.push(user._id.toString());
      user.stats.tournamentsPlayed += 1; // Esto no es exacto, debería incrementarse al jugar, no al registrarse
      await user.save();
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
    const tournament = tournaments.find(t => t.id === tournamentId);

    if (!tournament) {
      return res.status(404).json({ message: 'Torneo no encontrado.' });
    }

    res.status(200).json(tournament);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener detalles del torneo', error: error.message });
  }
});

module.exports = router;