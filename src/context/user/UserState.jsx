import React, { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'

import axiosClient from '../../config/Axios'

const UserState = (props) => {

    const initialState = {
        user: {
            username: null,
            email: null,
        },
        authStatus: false,
        loading: true
    }

    const [ globalState, dispatch ] = useReducer(UserReducer, initialState)

    const registerUser = async (dataForm) => {

        try {
            const res = await axiosClient.post("/usuario/crear", dataForm)
            dispatch({
                type: "REGISTRO_EXITOSO",
                payload: res.data
            })

        } catch (error) {
            console.log(error)
        }
    }


    const verifyingToken = async () => {

        const token = localStorage.getItem('token')

        if(token){
            axiosClient.defaults.headers.common['x-auth-token'] = token
        } else{
            delete axiosClient.defaults.headers.common['x-auth-token']
        }

        try {

            const respuesta = await axiosClient.get("/usuario/verificar-usuario")
            
            dispatch({
                type: "OBTENER_USUARIO",
                payload: respuesta.data.usuario
            })

        } catch (error) {
            console.log(error)
        }
    }


    const loginUser = async (dataForm) => {
        console.log("dataForm", dataForm)
        try {
            const respuesta = await axiosClient.post("/usuario/iniciar-sesion", dataForm)

            console.log(respuesta)

            dispatch({
                type: "LOGIN_EXITOSO",
                payload: respuesta.data
            })

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

