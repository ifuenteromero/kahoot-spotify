import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import routes from '../utils/routes';

const ProtectedRoute = () => {
    const { isLogged } = useContext(LoginContext);
    return isLogged ? <Outlet /> : <Navigate to={routes.login} />;
};

export default ProtectedRoute;
