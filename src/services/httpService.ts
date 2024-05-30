import axios from 'axios';
import { logout, token } from '../utils/login';
import routes from '../utils/routes';
import endpoints from './endpoints';

const httpService = axios.create({
    baseURL: endpoints.spotifyBaseUrl,
    headers: {
        common: {
            Authorization: `Bearer ${token}`,
        },
    },
});

httpService.interceptors.response.use(null, (error) => {
    if (error.response.status === 401) {
        logout();
        window.location.href = `${routes.login}`;
    }
    return Promise.reject(error);
});

export default httpService;
