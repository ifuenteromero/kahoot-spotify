import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import Login from './pages/Login';
import routes from './utils/routes';

const router = createBrowserRouter(
    [
        {
            path: routes.root,
            element: <ProtectedRoute />,
            children: [
                {
                    index: true,
                    element: <Landing />,
                },
            ],
        },
        {
            path: routes.login,
            element: <Login />,
        },
    ],
    { basename: routes.baseUrl }
);

export default router;
