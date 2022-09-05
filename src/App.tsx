import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

export interface product {
   id: number;
   title: string;
   description: string;
   price: number;
   image: string;
}

function App() {
   const [product, setProduct] = useState<product>();
   const [wishlist, setWishlist] = useState<product[]>([]);
   const [cart, setCart] = useState<product[]>([]);

   return (
      <>
         <BrowserRouter>
            <Navbar wishlist={wishlist} cart={cart} />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route
                  path="/shop"
                  element={
                     <Shop
                        setProduct={setProduct}
                        setWishlist={setWishlist}
                        setCart={setCart}
                        wishlist={wishlist}
                        cart={cart}
                     />
                  }
               />
               <Route
                  path="/shop/:id"
                  element={
                     <ProductDetails
                        product={product}
                        setWishlist={setWishlist}
                        setCart={setCart}
                        wishlist={wishlist}
                        cart={cart}
                     />
                  }
               />

               <Route
                  path="/wishlist"
                  element={
                     <Wishlist
                        wishlist={wishlist}
                        setProduct={setProduct}
                        setWishlist={setWishlist}
                        setCart={setCart}
                        cart={cart}
                     />
                  }
               />

               <Route
                  path="/cart"
                  element={
                     <Cart
                        wishlist={wishlist}
                        setProduct={setProduct}
                        setWishlist={setWishlist}
                        setCart={setCart}
                        cart={cart}
                     />
                  }
               />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
