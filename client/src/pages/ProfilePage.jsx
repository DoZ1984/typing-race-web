import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simula el estado de login

  // Datos simulados del usuario (esto será reemplazado por datos reales de la API)
  const userData = {
    username: 'TecladoNinja',
    email: 'ninja@example.com',
    level: 12,
    experience: 75, // Porcentaje hacia el próximo nivel
    wpm: 95,
    ppm: 475,
    accuracy: 97,
    racesCompleted: 120,
    racesWon: 35,
    tournamentsPlayed: 5,
    tournamentsWon: 1,
    badges: [
      { id: 1, name: 'Velocista', description: 'Alcanza 80+ WPM', icon: '🚀' },
      { id: 2, name: 'Preciso', description: 'Alcanza 95% de precisión', icon: '🎯' },
      { id: 3, name: 'Maratonista', description: 'Completa 100 carreras', icon: '🏃' },
      { id: 4, name: 'Campeón', description: 'Gana un torneo', icon: '🏆' }
    ],
    recentRaces: [
      { id: 1, date: '05/05/2025', wpm: 98, accuracy: 96, position: 2, participants: 5 },
      { id: 2, date: '03/05/2025', wpm: 93, accuracy: 97, position: 1, participants: 4 },
      { id: 3, date: '01/05/2025', wpm: 95, accuracy: 95, position: 3, participants: 6 }
    ]
  };

  const handleLoginPrompt = () => {
    // Simulación de activar login
    setIsLoggedIn(false);
  };

  return (
    <div className="animate-fade container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Perfil de Usuario</h1>

      {!isLoggedIn ? (
        <div className="max-w-2xl mx-auto text-center">
          <div className="card mb-6 p-8">
            <svg className="mx-auto h-16 w-16 text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h2 className="text-2xl mb-4">Inicia sesión para ver tu perfil</h2>
            <p className="text-gray-600 mb-6">Accede a tu cuenta para ver tus estadísticas, logros y participar en torneos.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/login" className="btn btn-primary w-full sm:w-auto">Iniciar Sesión</Link>
              <Link to="/register" className="btn btn-outline w-full sm:w-auto">Crear Cuenta</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Información del usuario y nivel */}
            <div className="card lg:col-span-1 mb-6 p-0 overflow-hidden h-fit">
              <div className="bg-gradient-to-r from-primary-dark to-primary p-6 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-pattern bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 26c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 26c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10-84c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0 88c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm10-30c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-28c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 60c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-88c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm28 88c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm10-28c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-28c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 60c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10-75c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm0 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm0 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM9 65c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm0-16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z\'%3E%3C/path%3E%3C/svg%3E')" }}></div>
                </div>
                <div className="relative z-10 mb-4 mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary-dark text-3xl font-bold shadow-lg border-4 border-white/30">
                  <span>{userData.level}</span>
                </div>
                <h2 className="text-2xl font-bold mb-1">{userData.username}</h2>
                <p className="text-white/80 text-sm mb-4">{userData.email}</p>
                <div className="w-full bg-white/30 rounded-full h-2.5 mb-6 mx-auto max-w-xs">
                  <div className="bg-secondary h-2.5 rounded-full" style={{ width: `${userData.experience}%` }}></div>
                  <p className="text-xs text-white/80 mt-1">Progreso al nivel {userData.level + 1}: {userData.experience}%</p>
                </div>
              </div>
              <div className="p-6 pt-0 text-center">
                <div className="flex justify-center gap-4 mb-6 mt-4">
                  <button className="btn btn-outline text-sm px-3 py-1.5">Editar Perfil</button>
                  <button className="btn btn-danger text-sm px-3 py-1.5" onClick={handleLoginPrompt}>Cerrar Sesión</button>
                </div>
                <div className="text-sm text-gray-500">
                  <p>Miembro desde: Enero 2025</p>
                </div>
              </div>
            </div>

            {/* Estadísticas principales */}
            <div className="lg:col-span-2">
              <div className="card mb-6">
                <h2 className="text-2xl mb-6">Estadísticas de Mecanografía</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="bg-blue-50 p-5 rounded-lg text-center border border-blue-200">
                    <p className="text-3xl font-bold text-primary mb-1">{userData.wpm}</p>
                    <p className="text-sm text-gray-600">Palabras por Minuto (WPM)</p>
                  </div>
                  <div className="bg-green-50 p-5 rounded-lg text-center border border-green-200">
                    <p className="text-3xl font-bold text-success mb-1">{userData.ppm}</p>
                    <p className="text-sm text-gray-600">Pulsaciones por Minuto (PPM)</p>
                  </div>
                  <div className="bg-purple-50 p-5 rounded-lg text-center border border-purple-200">
                    <p className="text-3xl font-bold text-purple-600 mb-1">{userData.accuracy}%</p>
                    <p className="text-sm text-gray-600">Precisión Promedio</p>
                  </div>
                  <div className="bg-yellow-50 p-5 rounded-lg text-center border border-yellow-200 row-span-2 sm:row-span-1 md:row-span-2 lg:row-span-1">
                    <div className="flex justify-center mb-1">
                      <div className="text-yellow-500 text-3xl">🏆 {userData.racesWon}</div>
                    </div>
                    <p className="text-sm text-gray-600">Carreras Ganadas de {userData.racesCompleted}</p>
                  </div>
                  <div className="bg-indigo-50 p-5 rounded-lg text-center border border-indigo-200 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 row-span-2 sm:row-span-1 md:row-span-2 lg:row-span-1 flex items-center justify-center flex-col">
                    <div className="text-3xl font-bold text-indigo-600 mb-1 flex items-center">
                      <span className="mr-2">🏅 {userData.tournamentsWon}</span> <span className="text-base font-normal text-gray-600">de {userData.tournamentsPlayed} Torneos Jugados</span>
                    </div>
                    <p className="text-sm text-gray-600">Historial de Torneos</p>
                  </div>
                </div>
              </div>

              {/* Logros */}
              <div className="card mb-6">
                <h2 className="text-2xl mb-6">Logros e Insignias</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                  {userData.badges.map(badge => (
                    <div key={badge.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:shadow-sm transition-shadow" title={badge.description}>
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <p className="font-medium text-gray-900 text-sm">{badge.name}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{badge.description}</p>
                    </div>
                  ))}
                  {/* Insignias bloqueadas */}
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center opacity-70 hover:shadow-sm transition-shadow" title="Completa 500 carreras para desbloquear">
                    <div className="text-3xl mb-2 text-gray-400">🔒</div>
                    <p className="font-medium text-gray-900 text-sm">Ultramaratonista</p>
                    <p className="text-xs text-gray-500 line-clamp-2">Completa 500 carreras</p>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline">Ver Todos los Logros</button>
                </div>
              </div>

              {/* Historial de carreras */}
              <div className="card mb-6 lg:mb-0">
                <h2 className="text-2xl mb-6">Historial de Carreras Recientes</h2>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WPM</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precisión</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posición</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {userData.recentRaces.map(race => (
                        <tr key={race.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{race.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono font-medium">{race.wpm}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{race.accuracy}%</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {race.position === 1 && <span className="text-yellow-500">🏆 1ro</span>}
                            {race.position === 2 && <span className="text-gray-500">🥈 2do</span>}
                            {race.position === 3 && <span className="text-amber-700">🥉 3ro</span>}
                            {race.position > 3 && <span>#{race.position} de {race.participants}</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline">Ver Historial Completo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;