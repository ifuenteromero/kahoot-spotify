import { useLayoutEffect, useState } from 'react';
import endpoints from '../services/endpoints';
import '../styles/login.scss';
import { tokenKey } from '../utils/localStorage';
import { getTokenFromResponse } from '../utils/login';

const Login = () => {
    const [isLogged, setIsLogged] = useState(false);
    const text = 'login with spotify';

    const getToken = async () => {
        const access_token = getTokenFromResponse();
        if (access_token) {
            window.location.href = '';
            localStorage.setItem(tokenKey, access_token);
            setIsLogged(true);
        }
    };

    useLayoutEffect(() => {
        const token = localStorage.getItem(tokenKey);
        const _isLogged = !!token;
        if (!_isLogged) {
            getToken();
        }
        setIsLogged(_isLogged);
    }, []);

    return (
        <div className='login'>
            {isLogged ? (
                <p id='logged'>logged</p>
            ) : (
                <a className='button--primary' href={endpoints.login}>
                    {text}
                </a>
            )}
        </div>
    );
};

export default Login;
