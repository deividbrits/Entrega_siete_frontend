import React, { useReducer } from 'react'
import MangaContext from './MangaContext'
import MangaReducer from './MangaReducer'
import clienteAxios from '../../config/Axios'


const MangaState = (props) => {
    const initialState = {
        mangas: [
            
        ]
    }

    const [globalState, dispatch] = useReducer(MangaReducer, initialState);

    const addManga = async (dataform) => {
        const form = {
            nombre : dataform.nombre,
            autor: dataform.autor,
            editorial: dataform.editorial,
            foto: dataform.foto,
            precio: dataform.precio,
        }
        try {
        await clienteAxios.post(`/create`,form)
        getAllManga()
        } catch (error) {
            console.log(error)
        }

    }

    const getAllManga = async () => {
        try {
            const response = await clienteAxios.get('/products/readall')
            console.log('getallmanga')
            console.log(response)
            dispatch ({
                type: 'GET_ALL_MANGAS',
                payload: response.data.manga
            })
        } catch(error) {
            console.log(error)
        }
    }

    const updateManga = async (id,dataform) => {
        const form = {
            id,
            nombre : dataform.nombre,
            autor: dataform.autor,
            editorial: dataform.editorial,
            foto: dataform.foto,
            precio: dataform.precio,
        }
        try {
        await clienteAxios.put(`/update/:${id}`,form)
        getAllManga()
        } catch (error) {
            console.log(error)
        }

    }  
    const deleteManga = async (id) => {
        const data = { id }
        try {
        await clienteAxios.delete(`/delete/:${id}`, {data})
        getAllManga()
        } catch (error) {
            console.log(error)
        }

    }  

    return (
        <MangaContext.Provider
            value={{
                mangas: globalState.mangas,
                addManga,
                getAllManga,
                updateManga,
                deleteManga
            }}>
            { props.children }            
        </MangaContext.Provider>
    )
}
export default MangaState