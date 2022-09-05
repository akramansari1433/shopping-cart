import { Box, Button, Grid, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { product } from "../App";

interface productProp {
   product?: {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
   };
   wishlist: product[];
   cart: product[];
   setWishlist: React.Dispatch<React.SetStateAction<any>>;
   setCart: React.Dispatch<React.SetStateAction<any>>;
}

export default function ProductDetails(props: productProp) {
   const inWishlist = (id?: number): boolean => {
      if (props.wishlist.find((product) => product.id === id)) {
         return true;
      } else return false;
   };

   const inCart = (id?: number): boolean => {
      if (props.cart.find((product) => product.id === id)) {
         return true;
      } else return false;
   };

   const handleWishlist = (p?: product) => {
      props.setWishlist((prevState: product[]) => {
         if (prevState.find((product) => product.id === p?.id)) {
            return prevState.filter((product) => product.id !== p?.id);
         }
         return [...prevState, p];
      });
   };

   const handleCart = (p?: product) => {
      props.setCart((prevState: product[]) => {
         if (prevState.find((product) => product.id === p?.id)) {
            return prevState.filter((product) => product.id !== p?.id);
         }
         return [...prevState, p];
      });
   };
   return (
      <Box sx={{ padding: 3 }}>
         <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} md={4}>
               <img
                  src={props.product?.image}
                  alt="product"
                  style={{ width: "100%", objectFit: "contain" }}
               />
            </Grid>
            <Grid item xs={12} md={8}>
               <Typography variant="h4">{props.product?.title}</Typography>
               <Typography mt={1} variant="h5" color="secondary">
                  ${props.product?.price}
               </Typography>
               <Typography mt={2} mb={3} variant="body2">
                  {props.product?.description}
               </Typography>
               <Button
                  startIcon={<FavoriteIcon />}
                  color="warning"
                  style={{ marginTop: 20, marginRight: 10 }}
                  onClick={() => handleWishlist(props.product)}
               >
                  {inWishlist(props.product?.id)
                     ? "Remove from wishlist"
                     : "Add to Wishlist"}
               </Button>
               <Button
                  startIcon={<ShoppingCartIcon />}
                  color="warning"
                  style={{ marginTop: 20 }}
                  onClick={() => handleCart(props.product)}
               >
                  {inCart(props.product?.id)
                     ? "Remove from cart"
                     : "Add to cart"}
               </Button>
            </Grid>
         </Grid>
      </Box>
   );
}
