import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import styles from './App.module.scss';

function App() {
    const router = useMemo(() => createBrowserRouter(routes), []);

    return <RouterProvider router={router} />;
}

export default App;
