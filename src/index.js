import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './Context/ContextShare';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextShare>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ContextShare>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
  </React.StrictMode>
);


