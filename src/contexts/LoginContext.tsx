import { ReactNode, createContext, useLayoutEffect, useState } from 'react';
import { tokenKey } from '../utils/localStorage';
import { getTokenFromResponse } from '../utils/login';
import routes from '../utils/routes';

export interface LoginContextProps {
    isLogged: boolean;
}

export const LoginContext = createContext<LoginContextProps>({
    isLogged: false,
});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const [isLogged, setIsLogged] = useState(
        () => !!localStorage.getItem(tokenKey)
    );

    useLayoutEffect(() => {
        const getToken = async () => {
            const access_token = getTokenFromResponse();
            if (access_token) {
                setIsLogged(true);
                localStorage.setItem(tokenKey, access_token);
                window.location.href = routes.baseUrl;
            }
        };
        if (!isLogged) {
            getToken();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LoginContext.Provider value={{ isLogged }}>
            {children}
        </LoginContext.Provider>
    );
};
