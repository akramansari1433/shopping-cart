import { Box, Button, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

interface productProp {
   product?: {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
   };
}

export default function ProductDetails(props: productProp) {
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
                  ₹{props.product?.price}
               </Typography>
               <Typography mt={2} mb={3} variant="body2">
                  {props.product?.description}
               </Typography>
               <Button
                  startIcon={<FavoriteIcon />}
                  variant="contained"
                  color="warning"
                  style={{ marginTop: 20, marginRight: 10 }}
               >
                  Add to wishlist
               </Button>
               <Button
                  startIcon={<ShoppingCartIcon />}
                  color="warning"
                  variant="contained"
                  style={{ marginTop: 20 }}
               >
                  Add to Cart
               </Button>
            </Grid>
         </Grid>
      </Box>
   );
}
