// Global configuration variables
export const API_BASE_URL = 'http://192.168.54.220:8000';
export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/users/login/`,
  REGISTER: `${API_BASE_URL}/api/users/register/`,
  LOGOUT: `${API_BASE_URL}/api/users/logout/`,
  USER_PROFILE: `${API_BASE_URL}/api/users/me/`,
};