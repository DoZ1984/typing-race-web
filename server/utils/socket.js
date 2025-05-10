const rooms = new Map(); // Almacena las salas de carreras

module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log(`Usuario conectado: ${socket.id}`);

    // Unirse a una sala de carrera
    socket.on('joinRoom', ({ roomId, username }) => {
      socket.join(roomId);
      
      if (!rooms.has(roomId)) {
        rooms.set(roomId, {
          players: [],
          text: '',
          started: false,
          startTime: null
        });
      }

      const room = rooms.get(roomId);
      const playerExists = room.players.some(p => p.id === socket.id);

      if (!playerExists) {
        room.players.push({
          id: socket.id,
          username: username || `User_${Math.random().toString(36).substring(2, 7)}`,
          progress: 0,
          wpm: 0,
          finished: false
        });
        rooms.set(roomId, room);
      }

      // Enviar información actualizada de la sala a todos los jugadores
      io.to(roomId).emit('roomUpdate', {
        players: room.players,
        text: room.text,
        started: room.started
      });

      console.log(`Usuario ${username || socket.id} se unió a la sala ${roomId}`);
    });

    // Actualizar progreso del jugador
    socket.on('updateProgress', ({ roomId, progress, wpm }) => {
      if (rooms.has(roomId)) {
        const room = rooms.get(roomId);
        const playerIndex = room.players.findIndex(p => p.id === socket.id);

        if (playerIndex !== -1) {
          room.players[playerIndex].progress = progress;
          room.players[playerIndex].wpm = wpm;

          if (progress >= 100) {
            room.players[playerIndex].finished = true;
          }

          rooms.set(roomId, room);

          // Enviar actualización a todos en la sala
          io.to(roomId).emit('roomUpdate', {
            players: room.players,
            text: room.text,
            started: room.started
          });
        }
      }
    });

    // Iniciar carrera
    socket.on('startRace', ({ roomId, text }) => {
      if (rooms.has(roomId)) {
        const room = rooms.get(roomId);
        room.started = true;
        room.text = text || generateRandomText();
        room.startTime = new Date();
        room.players.forEach(player => {
          player.progress = 0;
          player.wpm = 0;
          player.finished = false;
        });
        rooms.set(roomId, room);

        io.to(roomId).emit('raceStarted', {
          text: room.text,
          startTime: room.startTime
        });

        console.log(`Carrera iniciada en sala ${roomId}`);
      }
    });

    // Salir de la sala
    socket.on('leaveRoom', ({ roomId }) => {
      if (rooms.has(roomId)) {
        const room = rooms.get(roomId);
        room.players = room.players.filter(p => p.id !== socket.id);

        if (room.players.length === 0) {
          rooms.delete(roomId);
        } else {
          rooms.set(roomId, room);
          io.to(roomId).emit('roomUpdate', {
            players: room.players,
            text: room.text,
            started: room.started
          });
        }

        socket.leave(roomId);
        console.log(`Usuario ${socket.id} salió de la sala ${roomId}`);
      }
    });

    // Desconexión del usuario
    socket.on('disconnect', () => {
      rooms.forEach((room, roomId) => {
        const playerIndex = room.players.findIndex(p => p.id === socket.id);
        if (playerIndex !== -1) {
          room.players.splice(playerIndex, 1);

          if (room.players.length === 0) {
            rooms.delete(roomId);
          } else {
            rooms.set(roomId, room);
            io.to(roomId).emit('roomUpdate', {
              players: room.players,
              text: room.text,
              started: room.started
            });
          }
        }
      });
      console.log(`Usuario desconectado: ${socket.id}`);
    });
  });
};

// Generar texto aleatorio para carreras (esto puede ser mejorado con una base de datos)
function generateRandomText() {
  const texts = [
    "Este es un texto simple para una carrera de mecanografía. Escribe lo más rápido que puedas sin cometer errores.",
    "La práctica constante mejora la velocidad y precisión al escribir. Sigue intentándolo y verás resultados pronto.",
    "Escribir rápido es una habilidad valiosa en el mundo digital. Compite con otros para mejorar tus destrezas."
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}