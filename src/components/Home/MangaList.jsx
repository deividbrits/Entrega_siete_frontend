import React, {useContext} from 'react'
import MangaContext from '../../context/Manga/MangaContext'

export default function Mangalist() {
    const ctx = useContext(MangaContext)
    const { mangas } = ctx
    return (
        <div>
            Esta es la lista de guitarras
            {/*  */}
            {
                mangas.map((e) => {
                    return (
                        <div key={e.id}>
                            <h1>{e.nombre}</h1>
                            <p>{e.autor}</p>
                            <p>{e.editorial}</p>
                            <p>{e.foto}</p>
                            <p>{e.precio}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}