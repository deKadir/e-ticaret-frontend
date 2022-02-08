import React from "react";
import style from "./product.module.scss";
import Product from "./Product";
export default function Products({ products = [] }) {
  return (
    <div className={style.productsContainer}>
      <div className={style.productsWrapper}>
        {products.map((item, key) => {
          return <Product key={key} product={item} />;
        })}
      </div>
      <button>Show more</button>
    </div>
  );
}
