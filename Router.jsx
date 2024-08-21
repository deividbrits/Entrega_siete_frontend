import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Page1 } from './src/Pages/Page1.jsx'
import { AboutUs } from './src/Pages/AboutUs.jsx'



export const Router = createBrowserRouter ([
    {
     path : '/',
     element : <Page1 />,
    },
    {
     path : '/aboutus',
     element : <AboutUs />,
    },
    

])
