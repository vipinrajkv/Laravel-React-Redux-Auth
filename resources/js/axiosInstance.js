import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token ? `Bearer ${token}` : '';
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    (error) => {
        const { response } = error;

        if (response.status === 401) {
            // localStorage.removeItem('token');
        }
        throw error;
    }
);

export default axiosInstance;
