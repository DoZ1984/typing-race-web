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

// Obtener perfil de usuario
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener perfil de usuario', error: error.message });
  }
});

// Actualizar perfil de usuario
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { username, email } = req.body;

    // Verificar si el nuevo username o email ya están en uso por otro usuario
    if (username || email) {
      const existingUser = await User.findOne({
        $or: [{ username }, { email }],
        _id: { $ne: req.userId }
      });
      if (existingUser) {
        return res.status(400).json({ message: 'El nombre de usuario o correo electrónico ya está en uso.' });
      }
    }

    const updateData = {};
    if (username) updateData.username = username;
    if (email) updateData.email = email;

    const user = await User.findByIdAndUpdate(
      req.userId,
      updateData,
      { new: true, select: '-password' }
    );

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.status(200).json({ message: 'Perfil actualizado exitosamente', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar perfil', error: error.message });
  }
});

// Actualizar contraseña
router.put('/password', authenticateToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Se requiere la contraseña actual y la nueva contraseña.' });
    }

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    // Verificar contraseña actual
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'La contraseña actual es incorrecta.' });
    }

    // Actualizar contraseña
    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Contraseña actualizada exitosamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar contraseña', error: error.message });
  }
});

// Obtener estadísticas de usuario
router.get('/stats', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('stats level experience badges');
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener estadísticas', error: error.message });
  }
});

module.exports = router;