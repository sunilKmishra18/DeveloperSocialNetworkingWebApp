import React from 'react';
import { createRoot } from 'react-dom/client'; // Importing createRoot
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Creating a root

root.render(
  // Using the render method of the root
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
