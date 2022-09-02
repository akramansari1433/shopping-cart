import React from "react";
import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Grid,
   Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

interface p {
   id: number;
   title: string;
   description: string;
   price: number;
   image: string;
}

interface productProp {
   p: {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
   };
   setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function ProductCard(props: productProp) {
   let navigate = useNavigate();

   const handleOnClick = (p: p) => {
      navigate(`/shop/${p.id}`);
      props.setProduct(p);
   };

   return (
      <Grid item key={props.p.id}>
         <Card sx={{ maxWidth: 300 }} onClick={() => handleOnClick(props.p)}>
            <CardMedia
               component="img"
               src={props.p.image}
               sx={{ height: 200, objectFit: "contain" }}
            ></CardMedia>
            <CardContent>
               <Typography variant="h6">
                  {props.p.title.substring(0, 20)}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {props.p.description.substring(0, 100)}
               </Typography>
            </CardContent>
            <CardActions>
               <Button
                  startIcon={<AddShoppingCartIcon />}
                  size="small"
                  color="secondary"
               />

               <Button
                  startIcon={<FavoriteBorderIcon />}
                  size="small"
                  color="secondary"
               />
            </CardActions>
         </Card>
      </Grid>
   );
}
