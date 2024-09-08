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
        authStatus: false,
        loading: true
    }

    const [ globalState, dispatch ] = useReducer(UserReducer, initialState)

    const registerUser = async (dataForm) => {

        try {
            const res = await axiosClient.post("/users/register", dataForm)
            dispatch({
                type: "REGISTRO_EXITOSO",
                payload: res.data
            })

        } catch (error) {
            console.log(error)
        }
    }


    const verifyingToken = async () => {

        getToken()

        try {

            const respuesta = await axiosClient.get("/users/verify")
            console.log(respuesta.data)
            dispatch({
                type: "OBTENER_USUARIO",
                payload: respuesta.data.user
            })

        } catch (error) {
            console.log(error)
        }
    }


    const loginUser = async (dataForm) => {
        console.log("dataForm", dataForm)
        try {
            const respuesta = await axiosClient.post("/users/login", dataForm)

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

