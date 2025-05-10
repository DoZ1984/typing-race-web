# Typing Race Web

Aplicación web de carreras de mecanografía con gamificación y torneos.

## Características

- Práctica de mecanografía con medición de WPM y PPM
- Carreras multijugador en tiempo real
- Sistema de niveles y logros
- Torneos organizados por administradores
- Tablas de clasificación
- Diseño visual y colorido

## Tecnologías

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Base de datos**: MongoDB
- **Tiempo real**: Socket.io

## Estructura del proyecto

- `/client`: Aplicación frontend en React
- `/server`: Servidor backend en Node.js

## Instalación

### Requisitos previos
- Node.js (v14 o superior)
- npm o yarn

### Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/DoZ1984/typing-race-web.git
   cd typing-race-web
   ```

2. Instala las dependencias:
   ```bash
   # Instalar dependencias del servidor
   cd server
   npm install

   # Instalar dependencias del cliente
   cd ../client
   npm install
   ```

3. Crea un archivo `.env` en la carpeta `/server` con las variables de entorno necesarias.

4. Inicia el desarrollo:
   ```bash
   # Inicia el servidor (desde la carpeta server)
   npm run dev

   # Inicia el cliente (desde la carpeta client)
   npm start
   ```

## Licencia

Este proyecto está bajo la licencia MIT.