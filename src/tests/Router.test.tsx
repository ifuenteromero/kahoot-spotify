import { render, screen } from '@testing-library/react';
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

        render(
            <LoginContext.Provider value={contextValue}>
                <RouterProvider router={router} />
            </LoginContext.Provider>
        );

        return {
            loginLink: screen.queryByRole('link', { name: /login/i }),
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

    it('should render "logged" for the route / if authenticated', () => {
        const { loginLink } = navigateTo(routes.root, { isLogged: true });
        const logged = screen.getByText(/logged/i);

        expect(loginLink).not.toBeInTheDocument();
        expect(logged).toBeInTheDocument();
    });

    it('should show a link to homepage if user is authenticated and redirect to error page for invalid routes', () => {
        navigateTo('/lala', { isLogged: true });
        const notFoundText = screen.getByText(/not found/i);

        expect(notFoundText).toBeInTheDocument();
        expect(screen.getByText(/homepage/i));
    });
    it('should show a link to login if user is not authenticate and redirect to error page for invalid routes', () => {
        navigateTo('/lala');
        const notFoundText = screen.getByText(/not found/i);
        const loginText = screen.getByText(/login/i);

        expect(notFoundText).toBeInTheDocument();
        expect(loginText).toBeInTheDocument();
    });
});
