const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Manejo de errores específicos de Mongoose
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Error de validación',
      errors: Object.values(err.errors).map(val => val.message)
    });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'ID inválido proporcionado'
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      message: 'Valor duplicado. Este valor ya existe en la base de datos.'
    });
  }

  // Manejo de errores de JWT
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      message: 'Token de autenticación inválido'
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      message: 'Token de autenticación expirado'
    });
  }

  // Error genérico
  res.status(500).json({
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

module.exports = errorHandler;
