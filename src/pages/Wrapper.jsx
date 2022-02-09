import React from "react";
import ShoppingCart from "./cart/ShoppingCart";
import Category from "./category/Category";
import Detail from "./detail/Detail";
import Home from "./home/Home";

export default function Wrapper() {
  return (
    <div style={{ width: "100%" }}>
      {/* <Home /> */}
      {/* <Category /> */}
      {/* <Detail /> */}
      <ShoppingCart />
    </div>
  );
}
