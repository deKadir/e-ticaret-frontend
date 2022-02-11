import React from "react";
import style from "./shopping.module.scss";
import Item from "./Item";
import AuthPopup from "../auth/AuthPopup";
export default function ShoppingBody() {
  return (
    <div className={style.shoppingWrapper}>
      <h1>Shopping Bag</h1>
      <div className={style.shoppingContainer}>
        <div className={style.bagWrapper}>
          <div className={style.productsWrapper}>
            <Item />
          </div>
          <p>Total</p>
          <hr />
          <p>82.92$</p>
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
