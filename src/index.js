import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
/* import Footer from './Components/Footer'; */
import router from './Routes';
import { ContextProvider, ModalProvider } from './Components/Contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <ContextProvider>
        <Header />
        <RouterProvider router={router} />
        {/*  <Footer /> */}
      </ContextProvider>
    </ModalProvider>
  </React.StrictMode>
);
