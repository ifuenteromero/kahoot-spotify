import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { LoginContext, LoginContextProps } from '../contexts/LoginContext';
import { routeObjectList } from '../router';
import routes from '../utils/routes';

describe('Router', () => {
    const navigateTo = (
        path: string,
        contextValue: LoginContextProps = { isLogged: false }
    ) => {
        const router = createMemoryRouter(routeObjectList, {
            initialEntries: [path],
        });

        const queryClient = new QueryClient();

        render(
            <QueryClientProvider client={queryClient}>
                <LoginContext.Provider value={contextValue}>
                    <RouterProvider router={router} />
                </LoginContext.Provider>
            </QueryClientProvider>
        );

        const loginLink = screen.queryByRole('link', { name: /login/i });

        const getLoading = () => screen.queryByText(/loading/i);

        const waitForLoading = () => waitForElementToBeRemoved(getLoading);

        return {
            loginLink,
            getLoading,
            waitForLoading,
        };
    };
    it('should render the login page for the route /login', () => {
        const { loginLink } = navigateTo(routes.login);
        expect(loginLink).toBeInTheDocument();
    });

    it('should redirect to login page for the route / if not authenticated', () => {
        const { loginLink } = navigateTo(routes.root);
        expect(loginLink).toBeInTheDocument();
    });

    it('should show a link to homepage if user is authenticated and redirect to error page for invalid routes', () => {
        navigateTo('/lala', { isLogged: true });
        const notFoundText = screen.getByText(/not found/i);

        expect(notFoundText).toBeInTheDocument();
        expect(screen.getByText(/homepage/i));
    });

    it('should show a link to login if user is not authenticate and redirect to error page for invalid routes', () => {
        const { loginLink } = navigateTo('/lala');
        const notFoundText = screen.getByText(/not found/i);

        expect(notFoundText).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
    });
});
