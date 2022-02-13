import React from "react";
import Item from "./ProductItem";
import style from "./preview.module.scss";
export default function ProductsPreview() {
  return (
    <div className={style.bagWrapper}>
      <div className={style.productsWrapper}>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <p>Total</p>
      <hr />
      <p>82.92$</p>
    </div>
  );
}
