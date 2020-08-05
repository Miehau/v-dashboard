import axios from 'axios';

const apiClient = axios.create({
  baseURL: `${process.env.VUE_APP_BACKEND_SERVER_HOST}/oauth2/authorize/google`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  login() {
    return apiClient.options();
  }
};
