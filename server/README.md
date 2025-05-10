# Servidor de Typing Race Web

Backend de la aplicación de carreras de mecanografía desarrollado en Node.js con Express.

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB (Mongoose)
- Socket.io
- JWT para autenticación

## Estructura de carpetas
- `/controllers`: Controladores de rutas (pendiente de implementación)
- `/models`: Modelos de datos
- `/routes`: Definición de rutas
- `/middleware`: Middleware personalizado
- `/utils`: Utilidades del servidor
- `/config`: Configuraciones (pendiente de implementación)

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
NODE_ENV=development
```

Puedes usar el archivo `.env.example` como plantilla.

## Inicialización de datos de prueba
Para poblar la base de datos con datos de prueba (usuarios y torneos), ejecuta el script de inicialización:

```bash
node utils/seed.js
```

Asegúrate de que MongoDB esté ejecutándose antes de usar el script. Este script eliminará todos los datos existentes en las colecciones de usuarios y torneos, y los reemplazará con datos de prueba.

## API Endpoints
- **Autenticación**:
  - `POST /api/auth/register`: Registrar un nuevo usuario.
  - `POST /api/auth/login`: Iniciar sesión y obtener un token JWT.
- **Usuarios**:
  - `GET /api/users/profile`: Obtener perfil del usuario autenticado.
  - `PUT /api/users/profile`: Actualizar datos del perfil.
  - `PUT /api/users/password`: Cambiar contraseña.
  - `GET /api/users/stats`: Obtener estadísticas del usuario.
- **Carreras**:
  - `POST /api/races/results`: Guardar resultados de una carrera.
  - `GET /api/races/history`: Obtener historial de carreras (pendiente de implementación completa).
- **Torneos**:
  - `GET /api/tournaments`: Listar todos los torneos.
  - `GET /api/tournaments/:id`: Obtener detalles de un torneo específico.
  - `POST /api/tournaments/:id/register`: Registrarse en un torneo.
- **Clasificaciones**:
  - `GET /api/leaderboard/wpm`: Tabla de clasificación por WPM.
  - `GET /api/leaderboard/accuracy`: Tabla de clasificación por precisión.
  - `GET /api/leaderboard/races`: Tabla de clasificación por carreras ganadas.
