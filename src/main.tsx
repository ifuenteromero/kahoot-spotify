import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { theme } from './components/MUI/theme';
import { LoginProvider } from './contexts/LoginContext';
import router from './router';
import './styles/index.scss';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <LoginProvider>
                    <RouterProvider router={router} />
                    <ReactQueryDevtools />
                </LoginProvider>
            </QueryClientProvider>
        </ThemeProvider>
    </React.StrictMode>
);
