import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { saveRaceResults } from '../services/api';

const PracticePage = () => {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [difficulty, setDifficulty] = useState('medium');
  const [stats, setStats] = useState({ wpm: 0, ppm: 0, accuracy: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Textos de ejemplo según dificultad
  const sampleTexts = {
    easy: "Este es un texto fácil para practicar. Es corto y simple. Ideal para principiantes que quieren mejorar su velocidad.",
    medium: "Este texto tiene una dificultad media, con palabras más largas y algunas mayúsculas. Es perfecto para usuarios intermedios que desean un desafío moderado mientras escriben.",
    hard: "Este desafío es considerablemente más intrincado, incorporando vocabulario sofisticado, puntuación compleja y estructuras de oraciones que exigen un nivel superior de destreza y concentración para mecanografiar con precisión y rapidez."
  };

  // Generar texto según dificultad
  const generateText = (level) => {
    setText(sampleTexts[level]);
    setUserInput('');
    setStartTime(null);
    setEndTime(null);
    setIsTyping(false);
    setStats({ wpm: 0, ppm: 0, accuracy: 0 });
    setSaveMessage('');
  };

  useEffect(() => {
    generateText(difficulty);
  }, [difficulty]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Manejar entrada del usuario
  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    if (!startTime) {
      setStartTime(new Date());
      setIsTyping(true);
    }

    if (value === text) {
      setEndTime(new Date());
      setIsTyping(false);
      calculateStats(value);
    }
  };

  // Calcular estadísticas
  const calculateStats = async (input) => {
    if (!startTime || !endTime) return;

    const timeElapsed = (endTime - startTime) / 60000; // minutos
    const wordsTyped = input.trim().split(/\s+/).length;
    const charactersTyped = input.length;
    const correctChars = text.split('').filter((char, i) => i < input.length && char === input[i]).length;

    const wpm = Math.round(wordsTyped / timeElapsed);
    const ppm = Math.round(charactersTyped / timeElapsed);
    const accuracy = Math.round((correctChars / text.length) * 100);

    setStats({ wpm, ppm, accuracy });

    // Guardar resultados si el usuario está logueado
    if (isLoggedIn) {
      try {
        await saveRaceResults(wpm, ppm, accuracy, 1, 1, 'practice');
        setSaveMessage('¡Resultados guardados en tu perfil!');
      } catch (err) {
        setSaveMessage('Error al guardar resultados.');
      }
    } else {
      setSaveMessage('Inicia sesión para guardar tus resultados.');
    }
  };

  // Manejar cambio de dificultad
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  // Reiniciar práctica
  const handleRestart = () => {
    generateText(difficulty);
  };

  return (
    <div className="animate-fade container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Practicar Mecanografía</h1>

      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div className="w-1/3">
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">Nivel de Dificultad</label>
            <select id="difficulty" value={difficulty} onChange={handleDifficultyChange} className="form-control">
              <option value="easy">Fácil</option>
              <option value="medium">Medio</option>
              <option value="hard">Difícil</option>
            </select>
          </div>
          <button onClick={handleRestart} className="btn btn-outline h-fit self-end">Nuevo Texto</button>
        </div>

        <div className="card p-0 overflow-hidden mb-6">
          <div className="bg-gray-100 p-6 min-h-[200px] relative overflow-hidden mono text-lg leading-relaxed border-b border-gray-200">
            {text.split('').map((char, index) => {
              let colorClass = 'text-gray-500';
              if (index < userInput.length) {
                colorClass = char === userInput[index] ? 'text-success' : 'text-danger';
              }
              return <span key={index} className={colorClass}>{char}</span>;
            })}
          </div>
          <textarea
            className="w-full p-6 mono text-lg resize-none focus:outline-none"
            rows="5"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Empieza a escribir aquí..."
            disabled={!isTyping && userInput === text}
          ></textarea>
        </div>

        {stats.wpm > 0 && (
          <div className="card animate-slide mt-6" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl mb-4">Resultados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
                <p className="text-3xl font-bold text-primary">{stats.wpm}</p>
                <p className="text-sm text-gray-600">Palabras por Minuto (WPM)</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                <p className="text-3xl font-bold text-success">{stats.ppm}</p>
                <p className="text-sm text-gray-600">Pulsaciones por Minuto (PPM)</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                <p className="text-3xl font-bold text-purple-600">{stats.accuracy}%</p>
                <p className="text-sm text-gray-600">Precisión</p>
              </div>
            </div>
            {saveMessage && (
              <div className="mt-4 p-3 bg-gray-100 rounded-lg text-center text-sm text-gray-700">
                {saveMessage}
              </div>
            )}
            <div className="mt-6 text-center">
              <button onClick={handleRestart} className="btn btn-primary">Intentar de Nuevo</button>
              <Link to="/race" className="btn btn-outline ml-3">Competir en Carrera</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticePage;
