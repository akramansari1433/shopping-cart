import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";

interface CartPropType {
   setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function Cart(props: CartPropType) {
   const { cart } = useSelector((state: RootStore) => state.products);
   return (
      <Box sx={{ padding: 3 }}>
         {cart.length ? (
            <Grid container justifyContent="center" spacing={3}>
               {cart.map((product) => (
                  <ProductCard
                     product={product}
                     key={product.id}
                     setProduct={props.setProduct}
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
