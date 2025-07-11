// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';        // Make sure this file exists
import './css/index.css';           // Adjust if your CSS path is different

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
