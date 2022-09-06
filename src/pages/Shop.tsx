import React, { Dispatch, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/ProductActions";

interface ProductPropType {
   setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function Shop(props: ProductPropType) {
   const { products, loading } = useSelector(
      (state: RootStore) => state.products
   );

   const dispatch: Dispatch<any> = useDispatch();

   useEffect(() => {
      (() => {
         dispatch(getProducts());
      })();
   }, [dispatch]);

   return (
      <Box sx={{ padding: 3 }}>
         {loading ? (
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
