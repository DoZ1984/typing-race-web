import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-gray-700 pb-6 mb-6">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold tracking-tight">
              TypingRace
            </Link>
            <p className="mt-2 text-sm text-gray-400">Mejora tu velocidad de escritura y compite con otros.</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Producto</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link to="/practice" className="text-base text-gray-300 hover:text-white">Practicar</Link>
                </li>
                <li>
                  <Link to="/race" className="text-base text-gray-300 hover:text-white">Carreras</Link>
                </li>
                <li>
                  <Link to="/tournaments" className="text-base text-gray-300 hover:text-white">Torneos</Link>
                </li>
                <li>
                  <Link to="/leaderboard" className="text-base text-gray-300 hover:text-white">Clasificación</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Soporte</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Ayuda</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Contacto</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Privacidad</a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">Términos</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <p className="text-gray-400 text-sm">© 2025 TypingRace. Todos los derechos reservados.</p>
          <div className="flex space-x-5 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Discord</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M18.942 5.556a16.299 16.299 0 00-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 00-4.573 0 11.583 11.583 0 00-.535-1.097 16.274 16.274 0 00-4.129 1.3c2.611 3.946 3.319 7.794 2.965 11.587a16.494 16.494 0 005.061 2.593 12.65 12.65 0 001.084-1.785 10.689 10.689 0 01-1.707-3.228c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.115.277.226.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 001.084 1.785 16.46 16.46 0 005.064-2.595c-.415-4.396.709-8.209 2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;