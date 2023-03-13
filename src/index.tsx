import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootDiv = document.getElementById('root');
if (rootDiv === null) throw new Error('No element with ID "root" found.');
const root = ReactDOMClient.createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
