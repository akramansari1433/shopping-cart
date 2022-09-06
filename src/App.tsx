import React, { Dispatch, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import { getAllProducts } from "./utils/api-helper";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions/ProductActions";

export interface product {
   id: number;
   title: string;
   description: string;
   price: number;
   image: string;
}

function App() {
   const [products, setProducts] = useState<product[]>([]);
   const [product, setProduct] = useState<product>();
   const [wishlist, setWishlist] = useState<product[]>([]);
   const [cart, setCart] = useState<product[]>([]);

   const [loading, setLoading] = useState<boolean>(false);

   const dispatch: Dispatch<any> = useDispatch();
   dispatch(getProducts());

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
      <>
         <BrowserRouter>
            <Navbar wishlist={wishlist} cart={cart} />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route
                  path="/shop"
                  element={
                     <Shop
                        products={products}
                        loading={loading}
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

               <Route
                  path="/admin"
                  element={
                     <Admin
                        products={products}
                        loading={loading}
                        setProducts={setProducts}
                     />
                  }
               />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
