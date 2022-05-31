import axios from 'axios';

const PORT = 8080

export const axiosClient = axios.create({
  baseURL: `http://localhost:${PORT}/api/`,
  headers: {
    'content-type': 'application/json',
  },
});
