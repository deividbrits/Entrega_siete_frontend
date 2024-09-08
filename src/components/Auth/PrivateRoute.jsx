// import React, {useContext, useEffect, useState} from 'react'
// import { Route } from 'react-router-dom'
// import UserContext from '../../context/user/UserContext'

// export default function PrivateRoute({ component: Component, ...props  }) {

//     const userCtx = useContext(UserContext)
    
//     const { authStatus, verifyingToken } = userCtx

//     const [loading, setLoading] = useState(true)

//     useEffect(async () => {

//         await verifyingToken()
//         setLoading(false)

//     }, [authStatus])

//     return (
//         <Route {...props} render={ props => {            

//             if(loading) return null

//             return authStatus ? 
//                 (<Component {...props} />)
//                 :
//                 (<Redirect to="/" />)
//             }
//         } />
//     )
        
    
// }
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

export default function PrivateRoute() {
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingToken } = userCtx;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      await verifyingToken();
      setLoading(false);
    };

    verify();
  }, [authStatus, verifyingToken]);

  if (loading) {
    return <div>Loading...</div>; // Puedes poner un spinner o algo similar
  }

  // Si está autenticado, renderiza el contenido protegido
  return authStatus ? <Outlet /> : <Navigate to="/" />;
}
