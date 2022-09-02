import React from "react";
import {
   Box,
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useNavigate } from "react-router-dom";

interface product {
   id: number;
   title: string;
   description: string;
   price: number;
   image: string;
}

interface productProp {
   product: {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
   };
   inWishlist: boolean;
   inCart: boolean;
   setProduct: React.Dispatch<React.SetStateAction<any>>;
   setWishlist: React.Dispatch<React.SetStateAction<any>>;
   setCart: React.Dispatch<React.SetStateAction<any>>;
}

export default function ProductCard(props: productProp) {
   let navigate = useNavigate();

   const handleOnClick = (p: product) => {
      navigate(`/shop/${p.id}`);
      props.setProduct(p);
   };

   const handleWishlist = (p: product) => {
      props.setWishlist((prevState: product[]) => [...prevState, p]);
   };

   const handleCart = (p: product) => {
      props.setCart((prevState: product[]) => [...prevState, p]);
   };

   return (
      <Grid item key={props.product.id}>
         <Card sx={{ maxWidth: 300 }}>
            <Box onClick={() => handleOnClick(props.product)}>
               <CardMedia
                  component="img"
                  src={props.product.image}
                  sx={{ height: 200, objectFit: "contain" }}
               ></CardMedia>
               <CardContent>
                  <Typography variant="h6">
                     {props.product.title.substring(0, 20)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     {props.product.description.substring(0, 100)}
                  </Typography>
               </CardContent>
            </Box>

            <CardActions>
               <Button
                  startIcon={
                     props.inWishlist ? (
                        <FavoriteIcon />
                     ) : (
                        <FavoriteBorderIcon />
                     )
                  }
                  size="small"
                  color="secondary"
                  onClick={() => handleWishlist(props.product)}
               />
               <Button
                  startIcon={
                     props.inCart ? (
                        <ShoppingCartIcon />
                     ) : (
                        <AddShoppingCartIcon />
                     )
                  }
                  size="small"
                  color="secondary"
                  onClick={() => handleCart(props.product)}
               />
            </CardActions>
         </Card>
      </Grid>
   );
}
