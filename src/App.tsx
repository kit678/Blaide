import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import styles from './App.module.scss';
import styles from './App.module.scss';

function App() {
    const router = useMemo(() => createBrowserRouter(routes), []);

    return (
        <div className={styles.root}>
        <RouterProvider router={router} />
        </div>
    );
    return <RouterProvider router={router} />;
}

export default App;
