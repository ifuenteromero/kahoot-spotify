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
