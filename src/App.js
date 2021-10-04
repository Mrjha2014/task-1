import "./App.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Contant from "./Contant";
import CarouselContainer from "./CarouselContainer";

export default function App() {
  return (
    <div>
      <Header />
      <CarouselContainer />
      <Contant />
      <Card />
      <Footer />
    </div>
  );
}
