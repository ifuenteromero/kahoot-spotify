import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { LoginProvider } from './contexts/LoginContext';
import router from './router';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LoginProvider>
            <RouterProvider router={router} />
        </LoginProvider>
    </React.StrictMode>
);
