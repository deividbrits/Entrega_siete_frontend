
# E-commerce de venta de mangas 

Este proyecto es parte del sistema de evaluaciones del Bootcamp de desarrollo Fullstack de la Universidad del Desarrollo . 
Para este proyecto se desarrollo (por preferencias del autor), un e-commerse de venta de mangas, esta es una aplicacion 
FullStack con stack MERN. 



## Autor

- [@deividbrits](https://www.github.com/deividbrits)




## Tech Stack

**Client:** React, Material UI 

**Server:** Node, Express , MongoDB
 

## FrontEnd

En esta seccion se hablará solamente del codigo del FrontEnd . Para cubrir la seccion del Backend dirigirse a (https://github.com/deividbrits/Entrega_siete_backend). 

Para visualizar los mangas disponibles en la base de datos se realizó un mapeo de estos en los cuales se visualiza en formato de Card la imagen referencial del manga , su nombre , autor , precio y un boton para comprar , el cual redirecciona hacia un carro de compras.

En la parte superior existe una barra de navegacion con las distintas paginas disponibles .

Existe un boton de registro en el cual el cliente se puede registrar en la base de datos , luego de realizar este proceso la pagina direcciona hacia el inicio de sesión . 

Al iniciar sesión redirecciona hacia el perfil personal del cliente en el cual se podrá (en un futuro), modificar los datos email y contraseña. 

En la barra de navegacion superior en el costado derecho existe un menu de usuario con avatar. En este menu se encuentran los item : Perfil , Inicio de Sesión , Mis Pedidos , Logout. 
## Variables de Entorno

Para que este proyecto se pueda ejecutar en local se debe proporcionar el VITE_BACKEND_URL=http://localhost:3000/api/ 



## Color Reference

Para este proyecto se utilizo una paleta de colores proporcionado por https://paletadecolores.com.mx/

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
|  Color 1| ![#1c74d3](https://via.placeholder.com/10/1c74d3?text=+) #1c74d3 |
|  Color 2| ![#76c3e1](https://via.placeholder.com/10/76c3e1?text=+) #76c3e1 |
|  Color 3| ![#872d16](https://via.placeholder.com/10/872d16?text=+) #872d16 |
|  Color 4| ![#517aa0](https://via.placeholder.com/10/517aa0?text=+) #517aa0 |


## Lo que sigue 

1) Tuve problemas para crear rutas privadas y de autenticacion, tema que tengo pendiente por resolver. 

2) Todavia no quedo conforme con el diseño visual de la pagina . 

3) Tengo una doble renderizacion en el boton de Paypal 

4) Me hubiera gustado crear un componente para describir un poco más el manga que se visualiza en la pagina de entrada. Por tiempo no fue posible. 

5) Me gustaria en un futuro escalar la pagina para que el manga se pueda visualizar totalmente de manera digital y portatil en la aplicación. 