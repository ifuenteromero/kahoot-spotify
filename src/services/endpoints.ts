import { clientId, redirectUri, scopes } from '../utils/login';

const authEndpoint = 'https://accounts.spotify.com/authorize';

const login = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;

const spotifyBaseUrl = 'https://api.spotify.com/v1';

export default {
    login,
    spotifyBaseUrl,
};
