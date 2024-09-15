import React from 'react'
import { LinearProgress, Typography } from '@mui/material'
import image from '../../public/image1.jpg'

export const AskIa = () => {
  return (
    <div className = "ask-conteiner">
      <img src={image} ></img>

      
      <Typography variant = "h1" sx={{ color: "#872d16" }} > PROXIMAMENTE </Typography>
      <Typography variant = "h2" sx={{ color: "#f9f9f9" }} >En esta epoca donde todo es AI-Powered, nosotros no podiamos quedarnos atrás.  </Typography>
      <Typography variant = "h2" sx={{ color: "#f9f9f9" }}>Estamos trabajando en un proyecto de IA que te permitira responder sobre un manga/anime en especifico </Typography>
      <Typography variant = "h2" sx={{ color: "#f9f9f9" }}>Por ejemplo : preguntale a la IA : De que trata el manga de Dragon Ball?</Typography>

      <p>

      <LinearProgress variant="determinate" value={30} />
      </p>
    </div>
  
  )
}
