import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { getAllProducts } from "../api-helper";
import ProductCard from "../components/ProductCard/ProductCard";
import CircularProgress from "@mui/material/CircularProgress";

interface product {
   id: number;
   title: string;
   description: string;
   price: number;
   image: string;
}

interface productProps {
   wishlist: product[];
   cart: product[];
   setProduct: React.Dispatch<React.SetStateAction<any>>;
   setWishlist: React.Dispatch<React.SetStateAction<any>>;
   setCart: React.Dispatch<React.SetStateAction<any>>;
}

export default function Shop(props: productProps) {
   const [products, setProducts] = useState<product[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

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

   useEffect(() => {
      setLoading(true);
      getAllProducts()
         .then((res) => {
            if (res) {
               setProducts(res);
               setLoading(false);
            }
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);
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
               {products.map((product) => (
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
