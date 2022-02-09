import React from "react";

import { BackIcon, XIcon } from "../../assets/icons/Icons";
import style from "./payment.module.scss";
import PaymentDetails from "./PaymentDetails";
export default function Payment() {
  return (
    <div className={style.paymentWrapper}>
      <button onClick={() => console.log("button click")}></button>
      <div
        className={style.paymentPopup}
        onClick={() => {
          console.log("payment click");
        }}
      >
        <span className={style.arrowIcon}>
          <BackIcon />
        </span>
        <span className={style.closeIcon}>
          <XIcon />
        </span>
        <h1>Make Payment</h1>
        <div className={style.paymentSteps}>
          <span>1</span>
          <small></small>
          <span>2</span>
          <small></small>
          <span>3</span>
        </div>
        <PaymentDetails />
      </div>
    </div>
  );
}
