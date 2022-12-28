import { UserProvider } from 'Components/hooks/userContext';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from 'Components/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider value={{ username: 'Mango' }}>
      <App />
    </UserProvider>
  </StrictMode>
);
