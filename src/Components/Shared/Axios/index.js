import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`
});

axios.interceptors.request.use((config) => {
  const token = sessionStorage.get('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      sessionStorage.removeItem('ACCESS_TOKEN');
    } else {
      throw error;
    }
  }
);

export default axiosClient;
