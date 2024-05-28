import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorPage from './pages/ErrorPage';
import Landing from './pages/Landing';
import Login from './pages/Login';
import routes from './utils/routes';

export const routeObjectList = [
    {
        path: routes.root,
        errorElement: <ErrorPage />,
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
];

const router = createBrowserRouter(routeObjectList, {
    basename: routes.baseUrl,
});

export default router;
