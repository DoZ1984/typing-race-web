import React, { useState } from 'react';

const LeaderboardPage = () => {
  const [filter, setFilter] = useState('wpm');
  const [region, setRegion] = useState('global');

  // Datos simulados de clasificación (esto será reemplazado por datos reales de la API)
  const leaderboardData = {
    wpm: [
      { rank: 1, username: 'Velocista123', wpm: 120, ppm: 600, accuracy: 98, races: 150 },
      { rank: 2, username: 'TeclasRápidas', wpm: 115, ppm: 575, accuracy: 97, races: 130 },
      { rank: 3, username: 'MecanógrafoPro', wpm: 110, ppm: 550, accuracy: 99, races: 200 },
      { rank: 4, username: 'DedosÁgiles', wpm: 105, ppm: 525, accuracy: 96, races: 110 },
      { rank: 5, username: 'EscritorVeloz', wpm: 100, ppm: 500, accuracy: 95, races: 90 },
      { rank: 6, username: 'RápidoYFurioso', wpm: 98, ppm: 490, accuracy: 94, races: 85 },
      { rank: 7, username: 'TecladoNinja', wpm: 95, ppm: 475, accuracy: 97, races: 120 },
      { rank: 8, username: 'MáquinaDeEscribir', wpm: 92, ppm: 460, accuracy: 93, races: 75 },
      { rank: 9, username: 'DigitadorExperto', wpm: 90, ppm: 450, accuracy: 96, races: 100 },
      { rank: 10, username: 'TipeadorRécord', wpm: 88, ppm: 440, accuracy: 92, races: 80 }
    ],
    accuracy: [
      { rank: 1, username: 'MecanógrafoPro', wpm: 110, ppm: 550, accuracy: 99, races: 200 },
      { rank: 2, username: 'Velocista123', wpm: 120, ppm: 600, accuracy: 98, races: 150 },
      { rank: 3, username: 'TeclasRápidas', wpm: 115, ppm: 575, accuracy: 97, races: 130 },
      { rank: 4, username: 'TecladoNinja', wpm: 95, ppm: 475, accuracy: 97, races: 120 },
      { rank: 5, username: 'DedosÁgiles', wpm: 105, ppm: 525, accuracy: 96, races: 110 },
      { rank: 6, username: 'DigitadorExperto', wpm: 90, ppm: 450, accuracy: 96, races: 100 },
      { rank: 7, username: 'EscritorVeloz', wpm: 100, ppm: 500, accuracy: 95, races: 90 },
      { rank: 8, username: 'RápidoYFurioso', wpm: 98, ppm: 490, accuracy: 94, races: 85 },
      { rank: 9, username: 'MáquinaDeEscribir', wpm: 92, ppm: 460, accuracy: 93, races: 75 },
      { rank: 10, username: 'TipeadorRécord', wpm: 88, ppm: 440, accuracy: 92, races: 80 }
    ],
    races: [
      { rank: 1, username: 'MecanógrafoPro', wpm: 110, ppm: 550, accuracy: 99, races: 200 },
      { rank: 2, username: 'Velocista123', wpm: 120, ppm: 600, accuracy: 98, races: 150 },
      { rank: 3, username: 'TeclasRápidas', wpm: 115, ppm: 575, accuracy: 97, races: 130 },
      { rank: 4, username: 'TecladoNinja', wpm: 95, ppm: 475, accuracy: 97, races: 120 },
      { rank: 5, username: 'DedosÁgiles', wpm: 105, ppm: 525, accuracy: 96, races: 110 },
      { rank: 6, username: 'DigitadorExperto', wpm: 90, ppm: 450, accuracy: 96, races: 100 },
      { rank: 7, username: 'EscritorVeloz', wpm: 100, ppm: 500, accuracy: 95, races: 90 },
      { rank: 8, username: 'RápidoYFurioso', wpm: 98, ppm: 490, accuracy: 94, races: 85 },
      { rank: 9, username: 'TipeadorRécord', wpm: 88, ppm: 440, accuracy: 92, races: 80 },
      { rank: 10, username: 'MáquinaDeEscribir', wpm: 92, ppm: 460, accuracy: 93, races: 75 }
    ]
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const currentData = leaderboardData[filter];

  return (
    <div className="animate-fade container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Clasificaciones Globales</h1>

      <div className="max-w-5xl mx-auto">
        <div className="card mb-6 p-0 overflow-hidden">
          <div className="flex flex-wrap gap-4 justify-between p-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-4 py-2 rounded-md font-medium text-sm ${filter === 'wpm' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} 
                onClick={() => handleFilterChange('wpm')}
              >
                Velocidad (WPM)
              </button>
              <button 
                className={`px-4 py-2 rounded-md font-medium text-sm ${filter === 'accuracy' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} 
                onClick={() => handleFilterChange('accuracy')}
              >
                Precisión
              </button>
              <button 
                className={`px-4 py-2 rounded-md font-medium text-sm ${filter === 'races' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} 
                onClick={() => handleFilterChange('races')}
              >
                Carreras Ganadas
              </button>
            </div>
            <div className="w-48">
              <select value={region} onChange={handleRegionChange} className="form-control text-sm py-2">
                <option value="global">🌍 Global</option>
                <option value="europe">🇪🇺 Europa</option>
                <option value="americas">🇺🇸 Américas</option>
                <option value="asia">🇦🇸 Asia</option>
                <option value="africa">🇦🇫 África</option>
                <option value="oceania">🇦🇺 Oceanía</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">#</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WPM</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PPM</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precisión</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carreras</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentData.map(player => (
                  <tr key={player.rank} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {player.rank === 1 && <span className="text-yellow-500">🏆</span>}
                      {player.rank === 2 && <span className="text-gray-500">🥈</span>}
                      {player.rank === 3 && <span className="text-amber-700">🥉</span>}
                      {player.rank > 3 && <span className="pl-1.5">#{player.rank}</span>}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{player.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono font-medium">{filter === 'wpm' ? <span className="font-bold text-primary">{player.wpm}</span> : player.wpm}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono font-medium">{player.ppm}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono font-medium">{filter === 'accuracy' ? <span className="font-bold text-primary">{player.accuracy}%</span> : `${player.accuracy}%`}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono font-medium">{filter === 'races' ? <span className="font-bold text-primary">{player.races}</span> : player.races}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p>Las clasificaciones se actualizan diariamente. Compite en más carreras para mejorar tu posición.</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;