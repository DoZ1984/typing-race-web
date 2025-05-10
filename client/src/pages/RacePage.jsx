import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RacePage = () => {
  const [raceMode, setRaceMode] = useState('public');
  const [roomCode, setRoomCode] = useState('');
  const [isInRace, setIsInRace] = useState(false);
  const [players, setPlayers] = useState([]);

  // Simulación de jugadores en la sala (esto será reemplazado por datos reales de Socket.io)
  const mockPlayers = [
    { id: 1, name: 'Jugador1', progress: 45, wpm: 60 },
    { id: 2, name: 'Jugador2', progress: 30, wpm: 52 },
    { id: 3, name: 'Tú', progress: 20, wpm: 48 },
    { id: 4, name: 'Jugador3', progress: 10, wpm: 40 }
  ];

  const handleJoinRace = () => {
    // Simulación de unirse a una carrera
    setIsInRace(true);
    setPlayers(mockPlayers);
  };

  const handleLeaveRace = () => {
    // Simulación de salir de una carrera
    setIsInRace(false);
    setPlayers([]);
    setRoomCode('');
  };

  const handleModeChange = (e) => {
    setRaceMode(e.target.value);
    setRoomCode('');
  };

  const handleRoomCodeChange = (e) => {
    setRoomCode(e.target.value);
  };

  const generateRoomCode = () => {
    // Generar un código de sala aleatorio
    const code = Math.random().toString(36).substring(2, 7).toUpperCase();
    setRoomCode(code);
  };

  return (
    <div className="animate-fade container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Carreras de Mecanografía</h1>

      {!isInRace ? (
        <div className="max-w-2xl mx-auto">
          <div className="card mb-6">
            <h2 className="text-2xl mb-4">Seleccionar Modo de Carrera</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
              <div className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary hover:bg-blue-50 transition-all" onClick={() => setRaceMode('public')}>
                <input type="radio" id="public" name="raceMode" value="public" checked={raceMode === 'public'} onChange={handleModeChange} className="w-5 h-5 text-primary focus:ring-primary mr-3" />
                <div>
                  <label htmlFor="public" className="font-medium text-gray-900 cursor-pointer">Sala Pública</label>
                  <p className="text-sm text-gray-500">Únete a una sala con jugadores aleatorios de todo el mundo.</p>
                </div>
              </div>
              <div className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary hover:bg-blue-50 transition-all" onClick={() => setRaceMode('private')}>
                <input type="radio" id="private" name="raceMode" value="private" checked={raceMode === 'private'} onChange={handleModeChange} className="w-5 h-5 text-primary focus:ring-primary mr-3" />
                <div>
                  <label htmlFor="private" className="font-medium text-gray-900 cursor-pointer">Sala Privada</label>
                  <p className="text-sm text-gray-500">Crea o únete a una sala privada con amigos usando un código.</p>
                </div>
              </div>
            </div>

            {raceMode === 'private' && (
              <div className="mb-6 animate-slide" style={{ animationDelay: '0.1s' }}>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <button onClick={generateRoomCode} className="btn btn-outline w-full sm:w-auto">Crear Código de Sala</button>
                  <div className="flex-1">
                    <label htmlFor="roomCode" className="block text-sm font-medium text-gray-700 mb-2">Código de Sala</label>
                    <input id="roomCode" type="text" value={roomCode} onChange={handleRoomCodeChange} placeholder="Ingresa el código de la sala" className="form-control" />
                  </div>
                </div>
                {roomCode && (
                  <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
                    <p className="text-sm text-blue-800">Comparte este código con tus amigos: <span className="font-mono font-bold text-blue-600">{roomCode}</span></p>
                  </div>
                )}
              </div>
            )}

            <div className="text-center">
              <button onClick={handleJoinRace} className="btn btn-primary w-full sm:w-auto">Unirse a Carrera</button>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mt-6">
            <p>Debes estar registrado para guardar tus resultados y estadísticas de las carreras.</p>
            <Link to="/login" className="text-primary hover:underline">Inicia sesión</Link> o <Link to="/register" className="text-primary hover:underline">crea una cuenta</Link>.
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="card mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl m-0">Carrera en Curso {raceMode === 'private' && roomCode ? `(Sala: ${roomCode})` : ''}</h2>
              <button onClick={handleLeaveRace} className="btn btn-outline">Salir de la Carrera</button>
            </div>

            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
              <p className="text-blue-800">¡La carrera comenzará en breve! Prepárate para escribir...</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Participantes</h3>
              <div className="space-y-4">
                {players.map(player => (
                  <div key={player.id} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-medium ${player.name === 'Tú' ? 'text-primary' : ''}`}>{player.name}</span>
                      <span className="text-sm text-gray-500">{player.wpm} WPM</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className={`h-2.5 rounded-full ${player.name === 'Tú' ? 'bg-primary' : 'bg-secondary'}`} style={{ width: `${player.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-0 overflow-hidden mb-6">
              <div className="bg-gray-100 p-6 min-h-[150px] relative overflow-hidden mono text-lg leading-relaxed border-b border-gray-200 text-center text-gray-500">
                <p>El texto aparecerá aquí cuando comience la carrera...</p>
              </div>
              <textarea
                className="w-full p-6 mono text-lg resize-none focus:outline-none"
                rows="5"
                value=""
                placeholder="Podrás escribir aquí cuando comience la carrera..."
                disabled
              ></textarea>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RacePage;