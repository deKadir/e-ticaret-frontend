import React from "react";
import style from "./product.module.scss";
import Content from "./Content";
export default function Products({ products = [] }) {
  return (
    <div className={style.productsContainer}>
      <div className={style.productsWrapper}>
        {products.map((item, key) => {
          return <Content style={{ width: "24%" }} key={key} product={item} />;
        })}
      </div>
      <button>Show more</button>
    </div>
  );
}
