import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";

interface p {
   id: number;
   title: string;
   description: string;
   price: number;
   image: string;
}

function App() {
   const [product, setProduct] = useState<p>();

   return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/shop" element={<Shop setProduct={setProduct} />} />
               <Route
                  path="/shop/:id"
                  element={<ProductDetails product={product} />}
               />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
