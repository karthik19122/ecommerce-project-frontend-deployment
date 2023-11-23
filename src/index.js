import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
import { AuthProvider } from './Components/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ShopContextProvider>
);
