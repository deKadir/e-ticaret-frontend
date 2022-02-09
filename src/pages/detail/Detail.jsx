import React from "react";
import { Navbar, Footer, ProductDetail, Recommended } from "../../components";

export default function Detail() {
  return (
    <div>
      <Navbar />
      <ProductDetail />
      <Recommended />
      <Footer />
    </div>
  );
}
