import React from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import { product } from "../App";

interface productProps {
   wishlist: product[];
   cart: product[];
   products: product[];
   loading: boolean;
   setProduct: React.Dispatch<React.SetStateAction<any>>;
   setWishlist: React.Dispatch<React.SetStateAction<any>>;
   setCart: React.Dispatch<React.SetStateAction<any>>;
}

export default function Shop(props: productProps) {
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
         {props.loading ? (
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
               }}
            >
               <CircularProgress size={50} />
            </Box>
         ) : (
            <Grid container justifyContent="center" spacing={3}>
               {props.products.map((product) => (
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
         )}
      </Box>
   );
}
