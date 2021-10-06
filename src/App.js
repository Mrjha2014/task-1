import "./App.css";
import React from "react";
import Footer from "./Footer";
import Card from "./Card";
import Contant from "./Contant";
import CarouselContainer from "./CarouselContainer";
import Navbar from "./Navbar";
export default function App() {
  return (
    <div>
      <Navbar />
      <CarouselContainer />
      <Contant />
      <Card />
      <Footer />
    </div>
  );
}
