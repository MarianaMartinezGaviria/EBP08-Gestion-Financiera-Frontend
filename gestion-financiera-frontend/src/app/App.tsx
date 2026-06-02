import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AppProvider } from './context/AppContext';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from './components/ui/sonner';

export default function App() {

  useEffect(() => {
  fetch('https://eko-gestion-financiera-backend.onrender.com/swagger-ui/index.html')
    .catch(() => {});
}, []);

  return (
    <ThemeProvider>
      <AppProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" richColors />
      </AppProvider>
    </ThemeProvider>
  );
}