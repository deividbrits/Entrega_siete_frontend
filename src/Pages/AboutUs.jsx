import React from 'react'
import { Typography } from '@mui/material'
import otraimagen from '/otraimagen.png'

export const AboutUs = () => {
  return (
    <div className='about-conteiner' >
      <img src={otraimagen} style={{alignItems : 'center'}}></img>
     
        <p> <Typography variant="h1" sx={{ textAlign: 'center',color: 'white' }}>Hola, somos AllManga  </Typography></p>
 
      <section >
          <div >
            <p>
          <Typography variant='h2' sx={{color:"#872d16"}}>En este espacio amamos leer , sobre todo acerca de dibujo y animación japonesa, es por eso que 
            queremos acercar a las personas a obtener ese manga que tanto estaban buscando.
          </Typography>
          </p>
 
        </div>
      </section>
    </div>
  )
  
}
