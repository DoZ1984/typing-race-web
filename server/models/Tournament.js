const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre del torneo es obligatorio'],
    trim: true,
    maxlength: [100, 'El nombre del torneo no puede tener más de 100 caracteres']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'La descripción no puede tener más de 500 caracteres']
  },
  date: {
    type: Date,
    required: [true, 'La fecha del torneo es obligatoria']
  },
  status: {
    type: String,
    enum: ['Abierto', 'En Curso', 'Finalizado'],
    default: 'Abierto'
  },
  maxParticipants: {
    type: Number,
    required: [true, 'El número máximo de participantes es obligatorio'],
    min: [2, 'Debe haber al menos 2 participantes'],
    default: 100
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware para actualizar la fecha de modificación
tournamentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Tournament = mongoose.model('Tournament', tournamentSchema);
module.exports = Tournament;