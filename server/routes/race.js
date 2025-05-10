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

// Guardar resultados de una carrera
router.post('/results', authenticateToken, async (req, res) => {
  try {
    const { wpm, ppm, accuracy, position, participants, roomId } = req.body;

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    // Actualizar estadísticas del usuario
    user.stats.racesCompleted += 1;
    if (position === 1) {
      user.stats.racesWon += 1;
    }

    // Actualizar mejor WPM y PPM si es necesario
    if (wpm > user.stats.bestWpm) {
      user.stats.bestWpm = wpm;
    }
    if (ppm > user.stats.bestPpm) {
      user.stats.bestPpm = ppm;
    }

    // Calcular promedio de WPM (simplificado)
    if (user.stats.avgWpm === 0) {
      user.stats.avgWpm = wpm;
    } else {
      user.stats.avgWpm = (user.stats.avgWpm * (user.stats.racesCompleted - 1) + wpm) / user.stats.racesCompleted;
    }

    // Calcular promedio de precisión (simplificado)
    if (user.stats.avgAccuracy === 0) {
      user.stats.avgAccuracy = accuracy;
    } else {
      user.stats.avgAccuracy = (user.stats.avgAccuracy * (user.stats.racesCompleted - 1) + accuracy) / user.stats.racesCompleted;
    }

    // Guardar experiencia (ejemplo: 10 puntos por carrera completada, más si ganas)
    const expGain = position === 1 ? 20 : 10;
    user.experience += expGain;

    // Subir de nivel si se alcanza suficiente experiencia (ejemplo: 100 exp por nivel)
    const levelThreshold = user.level * 100;
    if (user.experience >= levelThreshold) {
      user.level += 1;
      user.experience = user.experience - levelThreshold;
    }

    await user.save();

    res.status(200).json({ message: 'Resultados de carrera guardados', expGain, newLevel: user.level });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar resultados de carrera', error: error.message });
  }
});

// Obtener historial de carreras del usuario
router.get('/history', authenticateToken, async (req, res) => {
  try {
    // Este endpoint puede ser expandido cuando se implemente un modelo de Race
    // Por ahora, devolvemos datos simulados o un mensaje
    res.status(200).json({ message: 'Historial de carreras no disponible aún. Próximamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener historial de carreras', error: error.message });
  }
});

module.exports = router;