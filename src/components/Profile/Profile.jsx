import React from 'react'
import 'nes.css/css/nes.min.css'

export const Profile = () => {
  return (
<div className='conteiner-profile'>
<div class="nes-container is-dark with-title">
  <p class="title">Perfil de David</p>
  <h1> Nombre Completo </h1>
  <span class="nes-text is-primary">David Brito</span>
  <h1> UserName </h1>
  <span class="nes-text is-primary">deividbrits</span>
  <h1>Correo Electronico </h1>
  <span class="nes-text is-primary">d.brito@allmanga.com</span>
  <button type="button" class="nes-btn is-warning">Editar</button>
  <h1>Contraseña </h1>
  <span class="nes-text is-primary">*******</span>
  <button type="button" class="nes-btn is-warning">Cambiar</button>

</div>
</div>
  )
}
export default Profile

