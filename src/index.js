import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Program from './pages/Union';
import './styles/Union.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Program />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
