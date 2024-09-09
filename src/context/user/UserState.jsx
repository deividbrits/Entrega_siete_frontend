import React, { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import axiosClient from '../../config/axios'
import getToken from '../../config/Token'

const UserState = (props) => {

    const initialState = {
        
        user: {
            username: null,
            email: null,
        },
        authStatus: null,
        loading: true,
        
    }
    console.log(initialState)

    const [ globalState, dispatch ] = useReducer(UserReducer, initialState)

    const registerUser = async (dataForm) => {

        try {
            const res = await axiosClient.post("/users/register", dataForm)
            const token =res.data.data
            dispatch({
                type: "REGISTRO_EXITOSO",
                payload: token
            })

        } catch (error) {
            console.log(error)
        }
    }


    const verifyingToken = async () => {

         const token = getToken()
            if(!token) {
                console.log("no se encontro token")
                return
            }

        try {

            const respuesta = await axiosClient.get("/users/verify", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        
            const userData = respuesta.data.data

            dispatch({
                type: "OBTENER_USUARIO",
                payload: userData
            })
            
        } catch (error) {
            console.log(error)
        }
    }


    const loginUser = async (dataForm) => {
        // console.log("dataForm", dataForm)

        try {
            const respuesta = await axiosClient.post("/users/login", dataForm)
            const token =respuesta.data.data
            console.log(respuesta)

            dispatch({
                type: "LOGIN_EXITOSO",
                payload: token
            })
            console.log(token)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        dispatch({
            type: "CERRAR_SESION"
        })
    }


    return (
        <UserContext.Provider value={{
            user: globalState.user,
            authStatus: globalState.authStatus,
            loading: globalState.loading,
            registerUser,
            verifyingToken,
            loginUser,
            logout
            
        }}>

            {props.children}

        </UserContext.Provider>
    
    )


}


export default UserState

