import { useQueries, useQuery } from '@tanstack/react-query';
import endpoints from '../services/endpoints';
import httpService from '../services/httpService';
import { Playlist, PlaylistsResponse } from '../utils/entities';

const usePlaylists = () =>
    useQuery({
        queryKey: ['playlists'],
        queryFn: () =>
            httpService
                .get<PlaylistsResponse>(endpoints.playlists)
                .then(({ data }) => data.items),
    });

const useTracks = () => {
    const { data: userPlaylists = [] } = usePlaylists();
    return useQueries({
        queries: userPlaylists?.map((p) => ({
            queryKey: ['playlist', p.name],
            queryFn: () => httpService.get<Playlist>(endpoints.playlist(p.id)),
        })),
        combine: (results) => {
            const isLoading = results.some((result) => result.isPending);

            return {
                data: results
                    .map((result) =>
                        result.data?.data.tracks.items.map(({ track }) => track)
                    )
                    .flat(),

                isLoading,
            };
        },
    });
};

export default useTracks;
