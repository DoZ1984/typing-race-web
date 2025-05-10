import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="animate-fade container mx-auto px-4 py-20 text-center">
      <div className="max-w-lg mx-auto">
        <div className="card p-8">
          <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Página no encontrada</h2>
          <p className="text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn btn-primary w-full sm:w-auto">Volver al Inicio</Link>
            <Link to="/practice" className="btn btn-outline w-full sm:w-auto">Practicar Mecanografía</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;