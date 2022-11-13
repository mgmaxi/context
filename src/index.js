import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductoContextProvider } from './contexts/productoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductoContextProvider>
      <App />
    </ProductoContextProvider>
  </React.StrictMode>
);

