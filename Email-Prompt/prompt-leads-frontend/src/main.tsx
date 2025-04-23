// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and above
import App from './App';
import './index.css'; // Optional, if you have global CSS

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
