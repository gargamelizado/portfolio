/**
 * Ponto de entrada da SPA. Monta React no #root do index.html
 * e aplica StrictMode (avisos extras de hooks/effects em dev).
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
