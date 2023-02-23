import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter
} from "react-router-dom";

import Routes from "./routes/routes.js";
import "./index.css";
import AuthProvider from './contexts/authProvider.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
