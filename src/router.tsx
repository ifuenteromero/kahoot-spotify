import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import routes from './utils/routes';

const router = createBrowserRouter(
    [
        {
            path: routes.root,
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
    ],
    { basename: routes.baseUrl }
);

export default router;
