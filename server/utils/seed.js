const mongoose = require('mongoose');
const User = require('../models/User');
const Tournament = require('../models/Tournament');

// Conexión a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/typing-race', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión a MongoDB establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

// Datos de prueba
const users = [
  { username: 'Velocista123', email: 'velocista@example.com', password: 'password123', level: 10, experience: 50, stats: { bestWpm: 120, bestPpm: 600, avgWpm: 110, avgAccuracy: 98, racesCompleted: 150, racesWon: 50, tournamentsPlayed: 5, tournamentsWon: 2 } },
  { username: 'TeclasRapidas', email: 'teclas@example.com', password: 'password123', level: 8, experience: 30, stats: { bestWpm: 115, bestPpm: 575, avgWpm: 105, avgAccuracy: 97, racesCompleted: 130, racesWon: 40, tournamentsPlayed: 4, tournamentsWon: 1 } },
  { username: 'MecanografoPro', email: 'pro@example.com', password: 'password123', level: 12, experience: 75, stats: { bestWpm: 110, bestPpm: 550, avgWpm: 100, avgAccuracy: 99, racesCompleted: 200, racesWon: 60, tournamentsPlayed: 6, tournamentsWon: 3 } }
];

const tournaments = [
  { name: 'Torneo Mensual de Mayo', description: 'Competencia mensual para los mejores mecanógrafos de mayo.', date: new Date('2025-05-15'), status: 'Abierto', maxParticipants: 200 },
  { name: 'Desafío de Velocidad Semanal', description: 'Un desafío rápido para probar tu velocidad esta semana.', date: new Date('2025-05-10'), status: 'En Curso', maxParticipants: 100 },
  { name: 'Torneo de Primavera', description: 'Celebración de primavera con un torneo épico.', date: new Date('2025-04-20'), status: 'Finalizado', maxParticipants: 150 }
];

// Función para poblar la base de datos
const seedData = async () => {
  try {
    // Limpiar colecciones existentes
    await User.deleteMany();
    await Tournament.deleteMany();
    console.log('Datos existentes eliminados');

    // Insertar usuarios
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} usuarios insertados`);

    // Insertar torneos
    const createdTournaments = await Tournament.insertMany(tournaments);
    console.log(`${createdTournaments.length} torneos insertados`);

    // Asignar el ganador al torneo finalizado (simulación)
    const finishedTournament = createdTournaments.find(t => t.status === 'Finalizado');
    if (finishedTournament) {
      finishedTournament.winner = createdUsers[0]._id; // Velocista123 como ganador
      finishedTournament.participants = createdUsers.map(u => u._id); // Todos participaron
      await finishedTournament.save();
      console.log('Ganador asignado al torneo finalizado');
    }

    // Asignar algunos participantes al torneo en curso
    const ongoingTournament = createdTournaments.find(t => t.status === 'En Curso');
    if (ongoingTournament) {
      ongoingTournament.participants = createdUsers.map(u => u._id); // Todos participan
      await ongoingTournament.save();
      console.log('Participantes asignados al torneo en curso');
    }

    console.log('Base de datos poblada con datos de prueba');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    mongoose.connection.close();
  }
};

// Ejecutar la conexión y el script de inicialización
connectDB().then(() => {
  seedData();
});
