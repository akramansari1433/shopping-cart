import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between",
});

export default function Navbar() {
   const { cart, wishlist } = useSelector((state: RootStore) => state.products);
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <StyledToolbar>
               <Typography variant="h5">Shopping Cart</Typography>

               <Box>
                  <Button
                     variant="text"
                     size="large"
                     color="secondary"
                     component={Link}
                     to="/"
                  >
                     Home
                  </Button>
                  <Button
                     variant="text"
                     size="large"
                     color="secondary"
                     component={Link}
                     to="/shop"
                  >
                     Shop
                  </Button>

                  <Button
                     variant="text"
                     size="large"
                     color="secondary"
                     component={Link}
                     to="/admin"
                  >
                     Admin
                  </Button>
               </Box>

               <Box>
                  <IconButton
                     size="large"
                     color="inherit"
                     component={Link}
                     to="/wishlist"
                  >
                     <Badge badgeContent={wishlist.length} color="error">
                        <FavoriteIcon />
                     </Badge>
                  </IconButton>

                  <IconButton
                     size="large"
                     color="inherit"
                     component={Link}
                     to="/cart"
                  >
                     <Badge badgeContent={cart.length} color="error">
                        <ShoppingCartIcon />
                     </Badge>
                  </IconButton>
               </Box>
            </StyledToolbar>
         </AppBar>
      </Box>
   );
}
