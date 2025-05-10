import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de validación de registro (esto será reemplazado por lógica real de autenticación)
    if (!username || !email || !password || !confirmPassword) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (!agreeTerms) {
      setError('Debes aceptar los términos y condiciones.');
      return;
    }
    // Simulación de registro exitoso
    alert('Registro exitoso. Serás redirigido al inicio de sesión...');
    setError('');
  };

  return (
    <div className="animate-fade container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Crear Cuenta</h1>
          <p className="text-gray-600">Regístrate para guardar tu progreso y competir en torneos.</p>
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
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                id="username"
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Elige un nombre de usuario"
                required
              />
            </div>

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
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <p className="text-xs text-gray-500 mt-1">La contraseña debe tener al menos 8 caracteres.</p>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                id="confirmPassword"
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center mb-6">
              <input
                id="agreeTerms"
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                required
              />
              <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700">Acepto los <a href="#" className="text-primary hover:underline">Términos y Condiciones</a> y la <a href="#" className="text-primary hover:underline">Política de Privacidad</a></label>
            </div>

            <button type="submit" className="btn btn-primary w-full">Crear Cuenta</button>
          </form>

          <div className="text-center text-sm text-gray-500 mt-6">
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login" className="text-primary hover:underline font-medium">Inicia sesión aquí</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;