import React, { useState } from "react";
import Style from "./product.module.scss";
import { ShareIcon, HearthIcon } from "../../assets/icons/Icons";
export default function Content({ product, style = {} }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={Style.product}
      onMouseEnter={() => {
        setHover(true);
      }}
      style={style}
      onMouseLeave={() => [setHover(false)]}
    >
      {hover && (
        <div className={Style.productHover}>
          <button>Add to Cart</button>
          <div className={Style.hoverIcons}>
            <div className={Style.hoverIcon}>
              <ShareIcon />
              <span>Share</span>
            </div>
            <div className={Style.hoverIcon}>
              <HearthIcon />
              <span>Like</span>
            </div>
          </div>
        </div>
      )}

      <img src={product.img} />
      <div className={Style.productBody}>
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
