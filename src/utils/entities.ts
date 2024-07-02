export interface UserProfileResponse {
    display_name: string;
    images: { url: string }[];
}

export interface UserProfile {
    name: string;
    image: string;
}

export const mapUserProfileResponse = (
    data: UserProfileResponse
): UserProfile => ({
    name: data.display_name,
    image: data.images?.[0].url,
});

export interface Playlist {
    id: string;
    name: string;
    tracks: { items: { track: Track }[] };
}

export interface PlaylistsResponse {
    items: Playlist[];
}

interface Artist {
    id: string;
    name: string;
}

export interface Track {
    id: string;
    artists: Artist[];
    preview_url: string;
}
