import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/themes";

import Routes from "./routes/routes.js";
import "./index.css";
import AuthProvider from './contexts/authProvider.js';
import AlertProvider from './contexts/alertProvider';
import "@mui/material/styles"

declare module "@mui/material/styles" {
  interface PaletteOptions {
    bg?: string,
    surface?: string,
  }
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AlertProvider>
        <ThemeProvider theme={theme} >
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </AlertProvider>
    </AuthProvider>
  </React.StrictMode>,
)
