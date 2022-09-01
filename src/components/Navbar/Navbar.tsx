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

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between",
});

export default function Navbar() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <StyledToolbar>
               <Typography variant="h5">Shopping Cart</Typography>
               <Box>
                  <Button
                     variant="text"
                     size="large"
                     color="error"
                     component={Link}
                     to="/"
                  >
                     Home
                  </Button>
                  <Button
                     variant="text"
                     size="large"
                     color="error"
                     component={Link}
                     to="/shop"
                  >
                     Shop
                  </Button>
               </Box>
               <Box>
                  <IconButton
                     size="large"
                     aria-label="show 4 new mails"
                     color="inherit"
                  >
                     <Badge badgeContent={4} color="error">
                        <FavoriteIcon />
                     </Badge>
                  </IconButton>
                  <IconButton
                     size="large"
                     aria-label="show 17 new notifications"
                     color="inherit"
                  >
                     <Badge badgeContent={17} color="error">
                        <ShoppingCartIcon />
                     </Badge>
                  </IconButton>
               </Box>
            </StyledToolbar>
         </AppBar>
      </Box>
   );
}
