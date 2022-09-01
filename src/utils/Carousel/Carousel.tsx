import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";

const PreviousBtn = (props: any) => {
   const { className, onClick } = props;
   return (
      <div className={className} onClick={onClick}>
         <ArrowBackIosIcon color="warning" fontSize="large" />
      </div>
   );
};
const NextBtn = (props: any) => {
   const { className, onClick } = props;
   return (
      <div className={className} onClick={onClick}>
         <ArrowForwardIosIcon color="warning" fontSize="large" />
      </div>
   );
};

export default function Carousel() {
   const settings = {
      dots: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      prevArrow: <PreviousBtn />,
      nextArrow: <NextBtn />,
   };
   return (
      <div className="container">
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
      </div>
   );
}
