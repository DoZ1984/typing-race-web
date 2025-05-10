import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de error de login (esto será reemplazado por lógica real de autenticación)
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (email !== 'test@example.com' || password !== 'password123') {
      setError('Correo electrónico o contraseña incorrectos.');
      return;
    }
    // Simulación de login exitoso
    alert('Inicio de sesión exitoso. Serás redirigido...');
    setError('');
  };

  return (
    <div className="animate-fade container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Iniciar Sesión</h1>
          <p className="text-gray-600">Accede a tu cuenta para guardar tu progreso y competir.</p>
        </div>

        <div className="card">
          {error && (
            <div className="alert alert-danger mb-6" role="alert">
              <svg className="flex-shrink-0 inline w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu.correo@ejemplo.com"
                required
              />
            </div>

            <div className="form-group">
              <div className="flex justify-between items-center">
                <label htmlFor="password">Contraseña</label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">¿Olvidaste tu contraseña?</Link>
              </div>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center mb-6">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">Recordarme</label>
            </div>

            <button type="submit" className="btn btn-primary w-full">Iniciar Sesión</button>
          </form>

          <div className="text-center text-sm text-gray-500 mt-6">
            <p>¿No tienes una cuenta?</p>
            <Link to="/register" className="text-primary hover:underline font-medium">Regístrate aquí</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;