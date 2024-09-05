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

export default function MangaCard() {
  const ctx = useContext(MangaContext);
  const { mangas, getAllManga } = ctx;

  useEffect(() => {
    getAllManga();
  }, []);

  return (
    <div>
      { 
        mangas.map((manga) => {
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="manga image"
              height="140"
              image={manga.foto}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {manga.nombre}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {manga.autor}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">{manga.precio}</Button>
              <Button size="small">comprar</Button>
            </CardActions>
          </Card>
          })
      }
    </div>
   
  )
}
