import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TournamentsPage = () => {
  const [activeTab, setActiveTab] = useState('current');

  // Datos simulados de torneos (esto será reemplazado por datos reales de la API)
  const currentTournaments = [
    { id: 1, name: 'Torneo Mensual de Mayo', date: '15 de Mayo de 2025', participants: 120, status: 'Abierto', registered: false },
    { id: 2, name: 'Desafío de Velocidad Semanal', date: '10 de Mayo de 2025', participants: 85, status: 'En Curso', registered: true }
  ];

  const pastTournaments = [
    { id: 3, name: 'Torneo de Primavera', date: '20 de Abril de 2025', participants: 150, status: 'Finalizado', winner: 'Velocista123', registered: true },
    { id: 4, name: 'Desafío de Marzo', date: '15 de Marzo de 2025', participants: 95, status: 'Finalizado', winner: 'TeclasRápidas', registered: false }
  ];

  const handleRegister = (tournamentId) => {
    // Simulación de registro en un torneo
    alert(`Te has registrado en el torneo con ID: ${tournamentId}`);
  };

  return (
    <div className="animate-fade container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Torneos de Mecanografía</h1>

      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">Participa en nuestros torneos oficiales y demuestra que eres el mejor mecanógrafo. Los torneos son organizados por la administración y ofrecen recompensas exclusivas.</p>
          <div className="inline-flex rounded-md shadow-lg mb-6">
            <Link to="/register" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-all">
              Crear Cuenta para Participar
            </Link>
          </div>
        </div>

        <div className="card p-0 overflow-hidden mb-6">
          <div className="flex flex-col sm:flex-row border-b border-gray-200">
            <button 
              className={`py-4 px-6 font-medium text-center focus:outline-none border-b-2 ${activeTab === 'current' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'}`} 
              onClick={() => setActiveTab('current')}
            >
              Torneos Actuales
            </button>
            <button 
              className={`py-4 px-6 font-medium text-center focus:outline-none border-b-2 ${activeTab === 'past' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'}`} 
              onClick={() => setActiveTab('past')}
            >
              Torneos Pasados
            </button>
          </div>
          <div className="p-6">
            {activeTab === 'current' ? (
              <div className="animate-fade" style={{ animationDelay: '0.1s' }}>
                {currentTournaments.length > 0 ? (
                  <div className="space-y-6">
                    {currentTournaments.map(tournament => (
                      <div key={tournament.id} className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{tournament.name}</h3>
                            <div className="flex items-center mt-1 text-gray-500 text-sm">
                              <span className="mr-3">📅 {tournament.date}</span>
                              <span className="mr-3">👥 {tournament.participants} participantes</span>
                              <span className={`px-2 py-0.5 rounded-full text-xs ${tournament.status === 'Abierto' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{tournament.status}</span>
                            </div>
                          </div>
                          <div className="mt-3 md:mt-0">
                            {tournament.registered ? (
                              <span className="inline-flex items-center px-4 py-2 rounded-md bg-green-100 text-green-800 font-medium text-sm">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                                Registrado
                              </span>
                            ) : (
                              <button onClick={() => handleRegister(tournament.id)} className="btn btn-primary text-sm py-2 px-4">Registrarse</button>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600">Compite en este torneo oficial organizado por TypingRace. ¡Demuestra tu velocidad y precisión para ganar premios exclusivos!</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    <p>No hay torneos activos en este momento. Vuelve más tarde para ver nuevas competencias.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="animate-fade" style={{ animationDelay: '0.1s' }}>
                {pastTournaments.length > 0 ? (
                  <div className="space-y-6">
                    {pastTournaments.map(tournament => (
                      <div key={tournament.id} className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow opacity-90 hover:opacity-100">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{tournament.name}</h3>
                            <div className="flex items-center mt-1 text-gray-500 text-sm">
                              <span className="mr-3">📅 {tournament.date}</span>
                              <span className="mr-3">👥 {tournament.participants} participantes</span>
                              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 text-xs">Finalizado</span>
                            </div>
                          </div>
                          <div className="mt-3 md:mt-0 text-sm">
                            <span className="inline-flex items-center text-gray-700">
                              🏆 Ganador: <span className="font-bold ml-1">{tournament.winner}</span>
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600">Este torneo ha finalizado. {tournament.registered ? '¡Gracias por participar!' : 'No participaste en este torneo.'}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    <p>No hay torneos pasados para mostrar.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentsPage;