import { HttpResponse, http } from 'msw';
import endpoints from '../../services/endpoints';
import { userProfileData } from './data';

export const handlers = [
    http.get(endpoints.spotifyBaseUrl + endpoints.currentUser, () =>
        HttpResponse.json(userProfileData)
    ),
];
