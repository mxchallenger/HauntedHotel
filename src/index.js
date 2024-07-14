import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/App';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root and render the App component
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
