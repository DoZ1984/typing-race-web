const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: [true, 'El ID de la sala es obligatorio'],
    unique: true
  },
  text: {
    type: String,
    required: [true, 'El texto de la carrera es obligatorio']
  },
  participants: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null // null para usuarios no registrados
    },
    username: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio']
    },
    wpm: {
      type: Number,
      default: 0
    },
    ppm: {
      type: Number,
      default: 0
    },
    accuracy: {
      type: Number,
      default: 0
    },
    progress: {
      type: Number,
      default: 0
    },
    position: {
      type: Number,
      default: 0 // 0 significa no terminado
    },
    completedAt: {
      type: Date,
      default: null
    }
  }],
  startedAt: {
    type: Date,
    default: null
  },
  finishedAt: {
    type: Date,
    default: null
  },
  isPrivate: {
    type: Boolean,
    default: false
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
raceSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Race = mongoose.model('Race', raceSchema);
module.exports = Race;