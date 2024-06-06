import { HttpResponse, delay, http } from 'msw';
import endpoints from '../services/endpoints';
import { server } from './mocks/server';

export const simulateDelay = (endpoint: string) => {
    server.use(
        http.get(endpoints.spotifyBaseUrl + endpoint, async () => {
            await delay();
            return HttpResponse.json([]);
        })
    );
};

export const simulateError = (endpoint: string) => {
    server.use(
        http.get(endpoints.spotifyBaseUrl + endpoint, () =>
            HttpResponse.error()
        )
    );
};
