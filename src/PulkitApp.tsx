import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const PulkitApp: React.FC = () => {
    const router = useMemo(() => createBrowserRouter(routes), []);
    return (
        <RouterProvider router={router}>
            {/* Pulkit's Subdomain Components */}
        </RouterProvider>
    );
};

export default PulkitApp;
