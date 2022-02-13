import React from "react";
import style from "./tabs.module.scss";
import Item from "../shoppingCartBody/Item";
import image from "../../assets/images/furniture_1.jpg";
import ShoppingBody from "../shoppingCartBody/ShoppingBody";
import ProductsPreview from "./../ProductsPreview/ProductsPreview";
export default function Orders() {
  return (
    <div className={style.tabWrapper}>
      <h4>Orders</h4>
      <div className={style.orders}>
        <ProductsPreview />
      </div>
    </div>
  );
}
