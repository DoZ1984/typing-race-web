import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-tight">TypingRace</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/practice" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/practice') ? 'border-white' : 'border-transparent hover:border-white/50'}`}>
                Practicar
              </Link>
              <Link to="/race" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/race') ? 'border-white' : 'border-transparent hover:border-white/50'}`}>
                Carreras
              </Link>
              <Link to="/tournaments" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/tournaments') ? 'border-white' : 'border-transparent hover:border-white/50'}`}>
                Torneos
              </Link>
              <Link to="/leaderboard" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/leaderboard') ? 'border-white' : 'border-transparent hover:border-white/50'}`}>
                Clasificación
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link to="/profile" className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${isActive('/profile') ? 'ring-2 ring-offset-2 ring-white' : ''}`}>
              Perfil
            </Link>
            <Link to="/login" className={`ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white ${isActive('/login') ? 'ring-2 ring-offset-2 ring-white' : ''}`}>
              Iniciar Sesión
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icono para abrir/cerrar menú */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/practice" className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/practice') ? 'border-white bg-primary-dark' : 'border-transparent hover:bg-primary-dark/50'}`} onClick={() => setIsOpen(false)}>
            Practicar
          </Link>
          <Link to="/race" className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/race') ? 'border-white bg-primary-dark' : 'border-transparent hover:bg-primary-dark/50'}`} onClick={() => setIsOpen(false)}>
            Carreras
          </Link>
          <Link to="/tournaments" className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/tournaments') ? 'border-white bg-primary-dark' : 'border-transparent hover:bg-primary-dark/50'}`} onClick={() => setIsOpen(false)}>
            Torneos
          </Link>
          <Link to="/leaderboard" className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/leaderboard') ? 'border-white bg-primary-dark' : 'border-transparent hover:bg-primary-dark/50'}`} onClick={() => setIsOpen(false)}>
            Clasificación
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-white/20">
          <div className="mt-3 space-y-1">
            <Link to="/profile" className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/profile') ? 'border-white bg-primary-dark' : 'border-transparent hover:bg-primary-dark/50'}`} onClick={() => setIsOpen(false)}>
              Perfil
            </Link>
            <Link to="/login" className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/login') ? 'border-white bg-primary-dark' : 'border-transparent hover:bg-primary-dark/50'}`} onClick={() => setIsOpen(false)}>
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;