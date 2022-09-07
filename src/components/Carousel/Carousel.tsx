import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import { Box } from "@mui/material";

export default function Carousel() {
   const settings = {
      dots: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
   };
   return (
      <Box p={3}>
         <Slider {...settings}>
            <div>
               <img alt="cover" src={img1} />
            </div>
            <div>
               <img alt="cover" src={img2} />
            </div>
            <div>
               <img alt="cover" src={img3} />
            </div>
         </Slider>
      </Box>
   );
}
