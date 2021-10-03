import "./App.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Slider from "./Slider";
import Contant from "./Contant";

export default function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Contant />
      <Card />
      <Footer />
    </div>
  );
}
