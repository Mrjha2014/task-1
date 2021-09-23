import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Slider() {
  return (
    <AliceCarousel autoPlay autoPlayInterval="2500">
      <img src="http://placehold.jp/800x600.png" alt="" className="sliderimg" />
      <img src="http://placehold.jp/800x600.png" alt="" className="sliderimg" />
      <img src="http://placehold.jp/800x600.png" alt="" className="sliderimg" />
    </AliceCarousel>
  );
}
