import React from 'react'
import { Typography } from '@mui/material'

export const AboutUs = () => {
  return (
    <div className='about-conteiner' >
     

        <Typography variant="h1" sx={{ textAlign: 'center',color: 'white' }}>Hola, somos AllManga  </Typography>
      <section >
          <div >
          <Typography variant='h2' sx={{color:"#872d16"}}>En este espacio amamos leer , sobre todo acerca de dibujo y animación japonesa, es por eso que 
            queremos acercar a las personas a obtener ese manga que tanto estaban buscando.
          </Typography>
        </div>
      </section>
    </div>
  )
  
}
