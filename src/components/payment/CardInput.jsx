import React from "react";
import style from "./payment.module.scss";
import visa from "../../assets/images/visa-logo.svg";
export default function CardInput() {
  return (
    <>
      <form>
        <div className={style.leftSide}>
          <img src={visa} width="339px" height="198px" />
        </div>
        <div className={style.rightSide}>
          <input placeholder="Card Number" />
          <div style={{ display: "flex", width: "100%", gap: "5%" }}>
            <input placeholder="Expiry" />
            <input placeholder="CVV" />
          </div>
          <input placeholder="Holder number" />
        </div>
      </form>
      <button className={style.payButton}>Go Payment</button>
    </>
  );
}
