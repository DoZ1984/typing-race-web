import axios from 'axios';

// Configuración base de Axios
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para agregar token de autenticación a las solicitudes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Interceptor para manejar errores de respuesta (por ejemplo, token expirado)
api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response && error.response.status === 401) {
    // Token inválido o expirado, limpiar almacenamiento y redirigir a login
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

// Métodos de autenticación
export const register = async (username, email, password) => {
  const response = await api.post('/auth/register', { username, email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  return response.data;
};

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/login';
};

// Métodos de usuario
export const getProfile = async () => {
  const response = await api.get('/users/profile');
  return response.data;
};

export const updateProfile = async (username, email) => {
  const response = await api.put('/users/profile', { username, email });
  return response.data;
};

export const updatePassword = async (currentPassword, newPassword) => {
  const response = await api.put('/users/password', { currentPassword, newPassword });
  return response.data;
};

export const getUserStats = async () => {
  const response = await api.get('/users/stats');
  return response.data;
};

// Métodos de carreras
export const saveRaceResults = async (wpm, ppm, accuracy, position, participants, roomId) => {
  const response = await api.post('/races/results', { wpm, ppm, accuracy, position, participants, roomId });
  return response.data;
};

export const getRaceHistory = async () => {
  const response = await api.get('/races/history');
  return response.data;
};

// Métodos de torneos
export const getTournaments = async () => {
  const response = await api.get('/tournaments');
  return response.data;
};

export const getTournamentDetails = async (id) => {
  const response = await api.get(`/tournaments/${id}`);
  return response.data;
};

export const registerForTournament = async (id) => {
  const response = await api.post(`/tournaments/${id}/register`);
  return response.data;
};

// Métodos de clasificación
export const getLeaderboardByWpm = async (limit = 10, region = 'global') => {
  const response = await api.get(`/leaderboard/wpm?limit=${limit}&region=${region}`);
  return response.data;
};

export const getLeaderboardByAccuracy = async (limit = 10, region = 'global') => {
  const response = await api.get(`/leaderboard/accuracy?limit=${limit}&region=${region}`);
  return response.data;
};

export const getLeaderboardByRaces = async (limit = 10, region = 'global') => {
  const response = await api.get(`/leaderboard/races?limit=${limit}&region=${region}`);
  return response.data;
};

export default api;
