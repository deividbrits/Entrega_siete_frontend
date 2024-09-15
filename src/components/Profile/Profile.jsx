import React from 'react'
import { Button, Typography } from '@mui/material'

export const Profile = () => {
  return (
<div className='conteiner-profile' >
<div >
 <p>
  <Typography variant = "h1" sx={{ color: "#872d16" }} >Perfil de David</Typography>
  </p>
  

    
</div>  
<div>
<p>
  <Typography variant='h2' sx={{ color: "#f9f9f9" }}> Nombre Completo </Typography>
  <Typography variant='h3'>David Brito</Typography>
  </p>
  </div>
  
  <div>
    <p> 
  <Typography variant='h2' sx={{ color: "#f9f9f9" }}> UserName </Typography>
  <Typography variant='h3' >deividbrits</Typography>
  </p>
  </div>
  <div>
    <p>
  <Typography variant='h2' sx={{ color: "#f9f9f9" }}>Correo Electronico </Typography>
  <Typography variant='h3' >d.brito@allmanga.com</Typography>
  <Button variant='contained' color = 'secondary' >Editar</Button>
  </p>
  </div>
  <div>
    <p>
  <Typography variant='h2'sx={{ color: "#f9f9f9" }} >Contraseña </Typography>
  <Typography variant='h3' >*******</Typography>
  <Button variant='contained' color = 'secondary' >Cambiar</Button>
  </p>
  </div>

</div>
  )
}
export default Profile

