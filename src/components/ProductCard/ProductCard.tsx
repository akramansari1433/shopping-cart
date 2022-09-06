import React, { Dispatch } from "react";
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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../App";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import {
   setProductCart,
   setProductWishlist,
} from "../../redux/actions/ProductActions";

interface ProductPropType {
   product: ProductType;
   setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function ProductCard(props: ProductPropType) {
   const { cart, wishlist } = useSelector((state: RootStore) => state.products);
   let navigate = useNavigate();
   const dispatch: Dispatch<any> = useDispatch();

   const inWishlist = (id: number): boolean => {
      if (wishlist.find((product) => product.id === id)) {
         return true;
      } else return false;
   };

   const inCart = (id: number): boolean => {
      if (cart.find((product) => product.id === id)) {
         return true;
      } else return false;
   };

   const handleOnClick = (p: ProductType) => {
      navigate(`/shop/${p.id}`);
      props.setProduct(p);
   };

   const handleWishlist = (p: ProductType) => {
      dispatch(setProductWishlist(p));
   };

   const handleCart = (p: ProductType) => {
      dispatch(setProductCart(p));
   };

   return (
      <Grid item key={props.product.id}>
         <Card sx={{ maxWidth: 300 }}>
            <Box
               onClick={() => handleOnClick(props.product)}
               sx={{ cursor: "pointer" }}
            >
               <CardMedia
                  component="img"
                  src={props.product.image}
                  sx={{ height: 200, objectFit: "contain" }}
               ></CardMedia>
               <CardContent>
                  <Typography variant="h6">
                     {props.product.title.length > 20
                        ? props.product.title.substring(0, 20)
                        : props.product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     {props.product.description.length > 100
                        ? props.product.description.substring(0, 100)
                        : props.product.description}
                  </Typography>
                  <Typography mt={2} variant="h6" color="secondary">
                     ${props.product.price}
                  </Typography>
               </CardContent>
            </Box>

            <CardActions>
               <Button
                  startIcon={
                     inWishlist(props.product.id) ? (
                        <FavoriteIcon />
                     ) : (
                        <FavoriteBorderIcon />
                     )
                  }
                  size="small"
                  color="secondary"
                  onClick={() => handleWishlist(props.product)}
               />
               <Button
                  startIcon={
                     inCart(props.product.id) ? (
                        <ShoppingCartIcon />
                     ) : (
                        <AddShoppingCartIcon />
                     )
                  }
                  size="small"
                  color="secondary"
                  onClick={() => handleCart(props.product)}
               />
            </CardActions>
         </Card>
      </Grid>
   );
}
