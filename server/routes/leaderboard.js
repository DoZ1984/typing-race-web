const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Obtener tabla de clasificación por WPM
router.get('/wpm', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const region = req.query.region || 'global';

    // En un entorno real, podrías filtrar por región si tienes un campo de región en el modelo User
    const leaderboard = await User.find({ 'stats.bestWpm': { $gt: 0 } })
      .sort({ 'stats.bestWpm': -1 })
      .limit(limit)
      .select('username stats.bestWpm stats.bestPpm stats.avgAccuracy stats.racesCompleted');

    const formattedLeaderboard = leaderboard.map((user, index) => ({
      rank: index + 1,
      username: user.username,
      wpm: user.stats.bestWpm,
      ppm: user.stats.bestPpm,
      accuracy: user.stats.avgAccuracy,
      races: user.stats.racesCompleted
    }));

    res.status(200).json(formattedLeaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tabla de clasificación por WPM', error: error.message });
  }
});

// Obtener tabla de clasificación por precisión
router.get('/accuracy', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const region = req.query.region || 'global';

    // En un entorno real, podrías filtrar por región si tienes un campo de región en el modelo User
    const leaderboard = await User.find({ 'stats.avgAccuracy': { $gt: 0 } })
      .sort({ 'stats.avgAccuracy': -1, 'stats.bestWpm': -1 })
      .limit(limit)
      .select('username stats.bestWpm stats.bestPpm stats.avgAccuracy stats.racesCompleted');

    const formattedLeaderboard = leaderboard.map((user, index) => ({
      rank: index + 1,
      username: user.username,
      wpm: user.stats.bestWpm,
      ppm: user.stats.bestPpm,
      accuracy: user.stats.avgAccuracy,
      races: user.stats.racesCompleted
    }));

    res.status(200).json(formattedLeaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tabla de clasificación por precisión', error: error.message });
  }
});

// Obtener tabla de clasificación por carreras ganadas
router.get('/races', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const region = req.query.region || 'global';

    // En un entorno real, podrías filtrar por región si tienes un campo de región en el modelo User
    const leaderboard = await User.find({ 'stats.racesWon': { $gt: 0 } })
      .sort({ 'stats.racesWon': -1, 'stats.bestWpm': -1 })
      .limit(limit)
      .select('username stats.bestWpm stats.bestPpm stats.avgAccuracy stats.racesCompleted stats.racesWon');

    const formattedLeaderboard = leaderboard.map((user, index) => ({
      rank: index + 1,
      username: user.username,
      wpm: user.stats.bestWpm,
      ppm: user.stats.bestPpm,
      accuracy: user.stats.avgAccuracy,
      races: user.stats.racesWon
    }));

    res.status(200).json(formattedLeaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tabla de clasificación por carreras ganadas', error: error.message });
  }
});

module.exports = router;