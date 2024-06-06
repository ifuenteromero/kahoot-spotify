import { useQuery } from '@tanstack/react-query';
import endpoints from '../services/endpoints';
import httpService from '../services/httpService';
import {
    UserProfile,
    UserProfileResponse,
    mapUserProfileResponse,
} from '../utils/entities';

const useUserProfile = () =>
    useQuery<UserProfile>({
        queryKey: ['userProfile'],
        queryFn: () =>
            httpService
                .get<UserProfileResponse>(endpoints.currentUser)
                .then(({ data }) => mapUserProfileResponse(data)),
    });

export default useUserProfile;
