// import React, {useContext, useEffect, useState} from 'react'
// import { Route } from 'react-router-dom'
// import UserContext from '../../context/user/UserContext'




// export default function AuthRoute({ component: Component, ...props }) {

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
//                 (<Redirect to="/profile" />)
//                 :
//                 (<Component {...props} />)
//             }
//         } />
//     )
        
    
// }
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

export default function AuthRoute({ children, ...props }) {
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
    return null; 
  }


  return (
    <Route {...props} element={authStatus ? <Navigate to="/profile" /> : children} />
  );
}
