import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.VUE_APP_BACKEND_SERVER_HOST}/list`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getAll() {
    return apiClient.get(`/all`);
  },
  add(task) {
    return apiClient.post(`/`, task);
  },
  update(task) {
    return apiClient.put(`/${task.id}`, task);
  },
  delete(taskId) {
    return apiClient.delete(`/${taskId}`);
  },
};
