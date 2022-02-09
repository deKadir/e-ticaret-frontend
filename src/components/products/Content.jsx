import React, { useState } from "react";
import style from "./product.module.scss";
import { ShareIcon, HearthIcon } from "../../assets/icons/Icons";
export default function Content({ product }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={style.product}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => [setHover(false)]}
    >
      {hover && (
        <div className={style.productHover}>
          <button>Add to Cart</button>
          <div className={style.hoverIcons}>
            <div className={style.hoverIcon}>
              <ShareIcon />
              <span>Share</span>
            </div>
            <div className={style.hoverIcon}>
              <HearthIcon />
              <span>Like</span>
            </div>
          </div>
        </div>
      )}

      <img src={product.img} />
      <div className={style.productBody}>
        {
          <discount
            style={!product.discount ? { backgroundColor: "#2ec1ac" } : {}}
          >
            {product.discount ? `-${product.discount}%` : "New"}
          </discount>
        }

        <h4>{product.title}</h4>
        <span>{product.description}</span>
        <div>
          <p>{`$ ${
            product.price - (product.price * product.discount) / 100
          }`}</p>
          {product.discount ? (
            <p>
              <del>{`$ ${product.price}`}</del>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
