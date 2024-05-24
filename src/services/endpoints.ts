import { clientId, redirectUri, scopes } from '../utils/login';

const authEndpoint = 'https://accounts.spotify.com/authorize';

const login = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;

export default {
    login,
};
