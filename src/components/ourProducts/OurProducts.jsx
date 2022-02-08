import React from "react";

import style from "./our.module.scss";
import Products from "../products/Products";
import { productItems } from "../../constants/DummyData";
export default function OurProducts() {
  return (
    <div className={style.ourProductsWrapper}>
      <h1>Our Products</h1>
      <Products products={productItems} />
    </div>
  );
}
