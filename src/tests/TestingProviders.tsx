import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { LoginContext, LoginContextProps } from '../contexts/LoginContext';

interface Props {
    children: ReactNode;
    contextValue?: LoginContextProps;
}

const TestingProviders = ({
    children,
    contextValue = { isLogged: false },
}: Props) => {
    const client = new QueryClient({
        // importante: si no fallan algunos tests porque no renderiza el error al hacer retry
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

    return (
        <QueryClientProvider client={client}>
            <LoginContext.Provider value={contextValue}>
                {children}
            </LoginContext.Provider>
        </QueryClientProvider>
    );
};

export default TestingProviders;
