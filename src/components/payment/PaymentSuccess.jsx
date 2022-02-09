import React from "react";
import { TickIcon } from "../../assets/icons/Icons";
import style from "./payment.module.scss";

export default function PaymentSuccess() {
  return (
    <div className={style.successWrapper}>
      <div className={style.done}>
        <TickIcon />
      </div>
      <label>Success</label>
      <button className={style.payButton}>Complete</button>
    </div>
  );
}
