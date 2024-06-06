import { useContext } from 'react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import '../styles/errorPage.scss';
import routes from '../utils/routes';

const ErrorPage = () => {
    const error = useRouteError();
    const isValidPage = isRouteErrorResponse(error);
    const errorText = isValidPage
        ? 'The requested page was not found.'
        : 'An unexpected error occurred.';

    const { isLogged } = useContext(LoginContext);
    const redirectLink = isLogged ? routes.root : routes.login;
    const linkText = isLogged ? 'homepage' : 'login';

    return (
        <div className='error-page'>
            <h1>Oops...</h1>
            <p>{errorText}</p>
            <Link to={redirectLink}>{`Go to  ${linkText}`}</Link>
        </div>
    );
};

export default ErrorPage;
