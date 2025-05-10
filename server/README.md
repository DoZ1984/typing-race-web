# Servidor de Typing Race Web

Backend de la aplicación de carreras de mecanografía desarrollado en Node.js con Express.

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB (Mongoose)
- Socket.io
- JWT para autenticación

## Estructura de carpetas
- `/controllers`: Controladores de rutas
- `/models`: Modelos de datos
- `/routes`: Definición de rutas
- `/middleware`: Middleware personalizado
- `/utils`: Utilidades del servidor
- `/config`: Configuraciones

## Instalación y ejecución
```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Iniciar en modo producción
npm start
```

## Variables de entorno
Crea un archivo `.env` en la raíz del servidor con las siguientes variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/typing-race
JWT_SECRET=tu_secreto_jwt_aqui
CLIENT_URL=http://localhost:3000
```