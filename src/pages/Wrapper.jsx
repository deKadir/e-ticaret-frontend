import React from "react";
import Category from "./category/Category";
import Home from "./home/Home";

export default function Wrapper() {
  return (
    <div style={{ width: "100%" }}>
      {/* <Home /> */}
      <Category />
    </div>
  );
}
