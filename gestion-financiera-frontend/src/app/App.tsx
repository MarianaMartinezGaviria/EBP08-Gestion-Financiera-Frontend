import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AppProvider } from './context/AppContext';
import { Toaster } from './components/ui/sonner';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    // Ping global para despertar el backend al cargar cualquier página
    fetch('https://ebp08-gestion-financiera-backend.onrender.com/api/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo: '', clave: '' })
    }).catch(() => {});
  }, []);

  return (
    <AppProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </AppProvider>
  );
}