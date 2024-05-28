import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import routes from './utils/routes';

export const routeObjectList = [
    {
        path: routes.root,
        errorElement: <ErrorPage />,
        element: <ProtectedRoute />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
        ],
    },
    {
        path: routes.login,
        element: <LoginPage />,
    },
];

const router = createBrowserRouter(routeObjectList, {
    basename: routes.baseUrl,
});

export default router;
