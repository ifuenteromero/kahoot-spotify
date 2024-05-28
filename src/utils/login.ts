export const redirectUri = import.meta.env.VITE_LOGIN_REDIRECT_URI;

export const clientId = import.meta.env.VITE_CLIENT_ID;

export const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'playlist-read-private',
];

export const getTokenFromResponse = () => {
    const location = window.location.href;
    const [access_token_part] = location.split('&');
    const [, access_token] = access_token_part.split('=');
    return access_token;
};
