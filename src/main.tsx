import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PulkitApp from './PulkitApp'; // Import the new PulkitApp component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        {window.location.hostname === 'pulkit.abc.com' ? <PulkitApp /> : <App />}
    </React.StrictMode>
);
