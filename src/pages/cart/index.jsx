import React from "react";
import { Navbar, Footer, ShoppingBody, Recommended } from "../../components";

export default function ShoppingCart() {
  return (
    <div>
      <Navbar />
      <ShoppingBody />
      <Recommended />
      <Footer />
    </div>
  );
}
