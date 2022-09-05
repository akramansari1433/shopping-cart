import React from "react";
import { product } from "../App";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard/ProductCard";

interface cartProp {
   wishlist: product[];
   cart: product[];
   setWishlist: React.Dispatch<React.SetStateAction<any>>;
   setCart: React.Dispatch<React.SetStateAction<any>>;
   setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function Cart(props: cartProp) {
   const inWishlist = (id: number): boolean => {
      if (props.wishlist.find((product) => product.id === id)) {
         return true;
      } else return false;
   };

   const inCart = (id: number): boolean => {
      if (props.cart.find((product) => product.id === id)) {
         return true;
      } else return false;
   };

   return (
      <Box sx={{ padding: 3 }}>
         {props.cart.length ? (
            <Grid container justifyContent="center" spacing={3}>
               {props.cart.map((product) => (
                  <ProductCard
                     product={product}
                     key={product.id}
                     setProduct={props.setProduct}
                     setWishlist={props.setWishlist}
                     setCart={props.setCart}
                     inWishlist={inWishlist(product.id)}
                     inCart={inCart(product.id)}
                  />
               ))}
            </Grid>
         ) : (
            <Typography variant="h2" textAlign="center">
               Cart is empty! ☹️
            </Typography>
         )}
      </Box>
   );
}
