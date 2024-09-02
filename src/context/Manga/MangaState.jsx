import React, { useReducer } from 'react'
import MangaContext from './MangaContext'
import MangaReducer from './MangaReducer'


const MangaState = (props) => {
    const initialState = {
        mangas: [
            { 
                id: 0,
                nombre: "Blaze MGR",
                autor: "koiji",
                editorial:"antartica",
                foto:"saodiasodi",
                precio: 2619,
            }
        ]
    }
    const [globalState, dispatch] = useReducer(MangaReducer, initialState)
    return (
        <MangaContext.Provider
            value={{
                mangas: globalState.mangas
            }}>
            { props.children }            
        </MangaContext.Provider>
    )
}
export default MangaState