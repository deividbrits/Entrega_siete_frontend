import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import MangaContext from "../../context/Manga/MangaContext";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function MangaCard() {
  const ctx = useContext(MangaContext);
  const { mangas, getAllManga } = ctx;
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate ()

  // const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
    getAllManga();
    setIsLoading(false)
  };
    fetchData();
  }, []);


  const addToCart = (manga) => {
    console.log("Manga agregado al carrito:", manga);
    navigate("/shoppingcard"); 
  };


  return (
    <div class="main" >
      {isLoading ? (
        <p>Loading Mangas...</p>
      ) : (
       mangas && mangas.length > 0 ? (
        mangas?.map((e ) => (
          <div class="cardmode" key={e.id}>
    <Card sx={{ maxWidth: 345 }} align-items="center" display="flex">
      <CardMedia
        component="img"
        alt="manga image"
        height="140"
        image={e.foto}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {e.nombre}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {e.autor}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{e.precio}</Button>
        <Button size="small" onClick={ () => addToCart(e) }>comprar</Button>
      </CardActions>
    </Card>
    </div>
        ))
      ) : (
        <p>No Mangas</p>
      )
      )}
    </div>
   
  )
}
