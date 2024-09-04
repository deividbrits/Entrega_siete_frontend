import React, {useContext, useEffect, useState} from 'react'

import { Route } from 'react-router-dom'
import UserContext from '../../context/user/UserContext'




export default function AuthRoute({ component: Component, ...props }) {

    const userCtx = useContext(UserContext)
    const { authStatus, verifyingToken } = userCtx

    const [loading, setLoading] = useState(true)

    useEffect(async () => {

        await verifyingToken()
        setLoading(false)

    }, [authStatus])

    return (
        <Route {...props} render={ props => {            

            if(loading) return null

            return authStatus ? 
                (<Redirect to="/perfil" />)
                :
                (<Component {...props} />)
            }
        } />
    )
        
    
}
