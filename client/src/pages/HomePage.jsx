import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="animate-fade">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 26c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 26c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10-84c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0 88c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm10-30c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-28c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 60c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-88c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm28 88c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm10-28c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-28c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 60c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10-75c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm0 16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm0 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm0 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM9 65c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm0-16c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z\'%3E%3C/path%3E%3C/svg%3E')" }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-x-16 pt-10">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Mejora tu velocidad de escritura</span>
                <span className="block text-secondary">¡Compite y gana!</span>
              </h1>
              <p className="mt-3 text-base text-white/90 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Practica mecanografía, compite en carreras en tiempo real y participa en torneos emocionantes. Mide tus palabras por minuto (WPM) y pulsaciones por minuto (PPM).
              </p>
              <div className="mt-8 sm:mt-10">
                <div className="rounded-md shadow-lg">
                  <Link to="/practice" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition-all">
                    ¡Empieza a practicar!
                  </Link>
                </div>
                <div className="mt-6 text-sm text-white/80">
                  <p>Regístrate para guardar tu progreso y competir en torneos.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="https://placehold.co/600x400/e5e7eb/1f2937?text=Typing+Race&font=roboto" alt="Typing Race App" className="rounded-lg shadow-xl border border-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
              <span className="block">Aprende y compite</span>
              <span className="block text-primary">con TypingRace</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-text-secondary max-w-3xl mx-auto">
              Nuestra plataforma te ofrece todas las herramientas que necesitas para mejorar tu velocidad y precisión al escribir.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card animate-slide" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary flex items-center justify-center text-white mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold m-0">Práctica Personalizada</h3>
              </div>
              <p className="text-text-secondary mb-0">Elige entre diferentes niveles de dificultad y textos para mejorar tus habilidades de mecanografía a tu propio ritmo.</p>
            </div>
            <div className="card animate-slide" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary flex items-center justify-center text-white mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold m-0">Carreras en Tiempo Real</h3>
              </div>
              <p className="text-text-secondary mb-0">Compite contra otros usuarios en emocionantes carreras en tiempo real y demuestra quién es el más rápido.</p>
            </div>
            <div className="card animate-slide" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary flex items-center justify-center text-white mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold m-0">Torneos y Desafíos</h3>
              </div>
              <p className="text-text-secondary mb-0">Participa en torneos oficiales organizados por la administración y gana premios exclusivos.</p>
            </div>
            <div className="card animate-slide" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary flex items-center justify-center text-white mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold m-0">Estadísticas Detalladas</h3>
              </div>
              <p className="text-text-secondary mb-0">Sigue tu progreso con estadísticas completas de WPM, PPM y precisión en cada sesión.</p>
            </div>
            <div className="card animate-slide" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary flex items-center justify-center text-white mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold m-0">Gamificación y Logros</h3>
              </div>
              <p className="text-text-secondary mb-0">Sube de nivel y desbloquea insignias a medida que mejoras tus habilidades de mecanografía.</p>
            </div>
            <div className="card animate-slide" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary flex items-center justify-center text-white mr-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold m-0">Comunidad Activa</h3>
              </div>
              <p className="text-text-secondary mb-0">Únete a una comunidad de entusiastas de la mecanografía, comparte consejos y haz amigos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary-dark text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://placehold.co/1200x600/4338ca/6366f1?text=Typing+Race&font=roboto" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl tracking-tight font-extrabold sm:text-4xl">
            <span className="block">¿Listo para mejorar tus habilidades?</span>
            <span className="block text-secondary">Únete a TypingRace hoy.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-white/90 max-w-2xl mx-auto">
            Regístrate ahora para guardar tu progreso, competir en torneos y desbloquear logros exclusivos.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-lg">
              <Link to="/register" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-8 transition-all">
                Crear Cuenta
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow-lg">
              <Link to="/practice" className="px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 md:py-4 md:text-lg md:px-8 transition-all">
                Practicar Sin Registro
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;