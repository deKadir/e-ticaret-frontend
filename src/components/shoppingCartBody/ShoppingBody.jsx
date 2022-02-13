import React from "react";
import ProductsPreview from "../ProductsPreview/ProductsPreview";
import style from "./shopping.module.scss";

export default function ShoppingBody() {
  return (
    <div className={style.shoppingWrapper}>
      <h1>Shopping Bag</h1>
      <div className={style.shoppingContainer}>
        <div className={style.previewWrapper}>
          <ProductsPreview />
        </div>
        <div className={style.loginWrapper}>
          <label>ADD A DISCOUNT CODE</label>
          <div className={style.promoInput}>
            <input placeholder="" />
            <button>ADD</button>
          </div>
          <label>Log in to use your member offers.</label>
          <button>LOG IN</button>
          <div className={style.cost}>
            <span>Order value:</span>
            <span>82.98$</span>
          </div>
          <div className={style.cost}>
            <span>Shipping:</span>
            <span>0.0$</span>
          </div>
          <div className={style.cost}>
            <span>Total:</span>
            <span>82.98$</span>
          </div>
          <button>Continue to checkout</button>
        </div>
      </div>
      {/* <Payment /> */}
      {/* <AuthPopup /> */}
    </div>
  );
}
