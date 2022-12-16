import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from 'Components/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
