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

export default function MangaCard() {
  const ctx = useContext(MangaContext);
  const { mangas, getAllManga } = ctx;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () =>{
    await getAllManga();
    setIsLoading(false)
  };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading Mangas...</p>
      ) : (
       mangas && mangas.length > 0 ? (
        mangas.map((e) => (
          <div key={e.id}>
    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small">comprar</Button>
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
