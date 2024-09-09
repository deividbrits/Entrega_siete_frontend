import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

export default function AuthRoute() {
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingToken } = userCtx;
  const [loading, setLoading] = useState(true);

  const [auth, setAuthStatus] = useState(false);

useEffect(() => {
  // Simulamos una verificación de autenticación al cargar la aplicación
  const token = localStorage.getItem('token');
  if (token) {
    // Si hay un token, verificamos su validez
    setAuthStatus(true);
  } else {
    setAuthStatus(false);
  }
}, []);


  useEffect(() => {
    const verify = async () => {
      await verifyingToken();
      setLoading(false);
    };
    verify();
  }, [verifyingToken]);

  if (loading) {
    return <div>Loading...</div>; // Mientras el token se verifica
  }
  console.log(authStatus)
  console.log('Estado de autenticación:', auth);  // Verifica si cambia al momento correcto

  // Si el usuario está autenticado, redirige al perfil, de lo contrario, renderiza los componentes hijos
  return authStatus ? <Navigate to="/profile" /> : <Outlet />;
  
}
