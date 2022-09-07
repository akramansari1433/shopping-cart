import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";

interface ProductPropType {
   setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function Shop(props: ProductPropType) {
   const { products, loading, error } = useSelector(
      (state: RootStore) => state.products
   );

   return (
      <Box sx={{ padding: 3 }}>
         {error ? (
            <Typography variant="h5" color="error" textAlign="center">
               Something went wrong!
            </Typography>
         ) : loading ? (
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
               {products?.map((product) => (
                  <ProductCard
                     product={product}
                     key={product.id}
                     setProduct={props.setProduct}
                  />
               ))}
            </Grid>
         )}
      </Box>
   );
}
