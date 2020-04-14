import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.VUE_APP_BACKEND_SERVER_HOST}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

export default {
  getAllTodos() {
    return apiClient.get(`/tasks/all`);
  },
  add(task) {
    return apiClient.post('/tasks', task);
  },
};
