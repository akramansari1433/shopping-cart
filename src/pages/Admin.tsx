import {
   Box,
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   CircularProgress,
   Grid,
   Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { Dispatch, useState } from "react";
import AddProduct from "../components/AddProduct/AddProduct";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/ProductActions";

export default function Admin() {
   const [open, setOpen] = useState<boolean>(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const { products, loading, error } = useSelector(
      (state: RootStore) => state.products
   );
   const dispatch: Dispatch<any> = useDispatch();

   const handleDelete = (id: number) => {
      dispatch(deleteProduct(id));
   };
   return (
      <Box p={3}>
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
            <>
               <Box py={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button variant="contained" onClick={handleOpen}>
                     Add new product
                  </Button>
               </Box>
               <Grid container justifyContent="center" spacing={3}>
                  {products?.map((product) => (
                     <Grid item key={product.id}>
                        <Card sx={{ maxWidth: 300 }}>
                           <Box sx={{ cursor: "pointer" }}>
                              <CardMedia
                                 component="img"
                                 src={product.image}
                                 sx={{ height: 200, objectFit: "contain" }}
                              ></CardMedia>
                              <CardContent>
                                 <Typography variant="h6">
                                    {product.title.length > 20
                                       ? product.title.substring(0, 20)
                                       : product.title}
                                 </Typography>
                                 <Typography
                                    variant="body2"
                                    color="text.secondary"
                                 >
                                    {product.description.length > 100
                                       ? product.description.substring(0, 100)
                                       : product.description}
                                 </Typography>
                                 <Typography
                                    mt={2}
                                    variant="h6"
                                    color="secondary"
                                 >
                                    ${product.price}
                                 </Typography>
                              </CardContent>
                           </Box>

                           <CardActions>
                              <Button
                                 startIcon={<DeleteIcon />}
                                 size="small"
                                 color="secondary"
                                 onClick={() => handleDelete(product.id)}
                              />
                           </CardActions>
                        </Card>
                     </Grid>
                  ))}
               </Grid>

               <AddProduct
                  open={open}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
               />
            </>
         )}
      </Box>
   );
}
