import axios, { AxiosInstance } from 'axios';

// Define your API base URL
const API_BASE_URL = import.meta.env.VITE_APP_API_KEY;

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,
});

export default apiClient;
