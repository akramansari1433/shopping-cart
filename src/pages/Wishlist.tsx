import React from "react";
import { product } from "../App";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard/ProductCard";

interface wishlistProp {
   wishlist: product[];
   cart: product[];
   setWishlist: React.Dispatch<React.SetStateAction<any>>;
   setCart: React.Dispatch<React.SetStateAction<any>>;
   setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function Wishlist(props: wishlistProp) {
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
         {props.wishlist.length ? (
            <Grid container justifyContent="center" spacing={3}>
               {props.wishlist.map((product) => (
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
               Wishlist empty! ☹️
            </Typography>
         )}
      </Box>
   );
}
