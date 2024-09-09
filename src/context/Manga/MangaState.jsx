import React, { useReducer } from 'react'
import MangaContext from './MangaContext'
import MangaReducer from './MangaReducer'
import axiosClient from '../../config/Axios'


const MangaState = (props) => {
    const initialState = {
        manga: []
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
        await axiosClient.post(`/create`,form)
        getAllManga()
        } catch (error) {
            console.log(error)
        }

    }

    const getAllManga = async () => {
        try {
            const response = await axiosClient.get('/products/readall')
            
            console.log(response)
            dispatch ({
                type: 'GET-ALL-MANGAS',
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
        await axiosClient.put(`/update/:${id}`,form)
        getAllManga()
        } catch (error) {
            console.log(error)
        }

    }  
    const deleteManga = async (id) => {
        const data = { id }
        try {
        await axiosClient.delete(`/delete/:${id}`, {data})
        getAllManga()
        } catch (error) {
            console.log(error)
        }

    }  

    return (
        <MangaContext.Provider
            value={{
                mangas: globalState.manga,
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