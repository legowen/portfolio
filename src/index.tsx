import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// SCSS 스타일
import "./assets/scss/style.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);