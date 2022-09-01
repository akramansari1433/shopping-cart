import React, { useEffect, useState } from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getAllProducts } from "../api-helper";

interface product {
   id: number;
   title: string;
   description: string;
   price: number;
   image: string;
   category: string;
   rating: {
      count: number;
      rate: number;
   };
}

export default function Shop() {
   const [products, setProducts] = useState<product[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

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
      <Box sx={{ marginY: 3 }}>
         {loading ? (
            <Typography textAlign="center">Loading...</Typography>
         ) : (
            <Grid container justifyContent="center" spacing={3}>
               {products.map((p) => (
                  <Grid item key={p.id}>
                     <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                           component="img"
                           src={p.image}
                           sx={{ height: 200, objectFit: "contain" }}
                        ></CardMedia>
                        <CardContent>
                           <Typography variant="h6">
                              {p.title.substring(0, 20)}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              {p.description.substring(0, 100)}
                           </Typography>
                        </CardContent>
                        <CardActions>
                           <Button
                              startIcon={<AddShoppingCartIcon />}
                              size="small"
                              color="secondary"
                           />

                           <Button
                              startIcon={<FavoriteIcon />}
                              size="small"
                              color="secondary"
                           />
                        </CardActions>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         )}
      </Box>
   );
}
