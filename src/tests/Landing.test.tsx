import {
    render,
    screen,
    waitForElementToBeRemoved,
    within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { LoginContextProps } from '../contexts/LoginContext';
import LandingPage from '../pages/LandingPage';
import { logout } from '../utils/login';
import TestingProviders from './TestingProviders';
import { userProfileData } from './mocks/data';

vi.mock('../utils/login', async (importOriginal) => {
    const originalModule =
        await importOriginal<typeof import('../utils/login')>();
    return {
        ...originalModule,
        logout: vi.fn(),
    };
});

describe('LandingPage', () => {
    const renderLanding = (
        contextValue: LoginContextProps = { isLogged: true }
    ) => {
        render(
            <TestingProviders contextValue={contextValue}>
                <LandingPage />
            </TestingProviders>
        );

        const getLoading = () => screen.queryByRole('progressbar');
        const waitForLoading = () =>
            waitForElementToBeRemoved(getLoading, { timeout: 1500 });
        const user = userEvent.setup();

        return {
            getLoading,
            waitForLoading,
            user,
        };
    };

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should render a loading indicator when fetching data', () => {
        const { getLoading } = renderLanding();
        expect(getLoading()).toBeInTheDocument();
    });

    it('should remove the loading indicator after data is fetched', async () => {
        const { getLoading, waitForLoading } = renderLanding();
        await waitForLoading();
        expect(getLoading()).not.toBeInTheDocument();
    });

    it('should render "logged" text if authenticated', async () => {
        const { waitForLoading } = renderLanding();
        await waitForLoading();
        const logged = screen.getByText(/logged/i);
        expect(logged).toBeInTheDocument();
    });

    it('should not render the login link if authenticated', async () => {
        const { waitForLoading } = renderLanding();
        await waitForLoading();
        const loginLink = screen.queryByRole('link', { name: /login/i });
        expect(loginLink).not.toBeInTheDocument();
    });

    it('should show user profile image and handle logout', async () => {
        const { waitForLoading, user } = renderLanding();
        await waitForLoading();

        const userProfileButton = screen.getByRole('button');
        const userProfileImage = within(userProfileButton).getByRole('img');

        expect(userProfileImage).toHaveAttribute(
            'alt',
            userProfileData.display_name
        );
        expect(userProfileImage).toHaveAttribute(
            'src',
            userProfileData.images[0].url
        );

        await user.click(userProfileButton);
        const logoutOption = screen.getByRole('menuitem', { name: /logout/i });
        expect(logoutOption).toBeInTheDocument();

        await user.click(logoutOption);
        expect(logout).toHaveBeenCalled();
    });
});
