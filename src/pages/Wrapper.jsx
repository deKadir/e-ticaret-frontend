import React from "react";
import Home from "./home/Home";
import Inspiration from "./inspiration/Inspiration";
import OurProducts from "./ourProducts/OurProducts";

export default function Wrapper() {
  return (
    <div style={{ width: "100%" }}>
      <Home />
      <OurProducts />
      <Inspiration />
    </div>
  );
}
