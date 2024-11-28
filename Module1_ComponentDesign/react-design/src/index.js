import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Khai báo sử dụng 2 module (css, js) của bootstrap framework
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);