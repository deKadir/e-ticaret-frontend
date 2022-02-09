import React from "react";
import { Footer, Navbar, Products, CategoryBody } from "../../components/index";
import { productItems } from "../../constants/DummyData";

export default function Category() {
  return (
    <div>
      <Navbar />

      <CategoryBody />
      <Footer />
    </div>
  );
}
