import React from "react";
import style from "./payment.module.scss";
import { BankCard, BankAccount } from "../../assets/icons/Icons";
export default function PaymentDetails() {
  return (
    <>
      <form>
        <div className={style.leftSide}>
          <input placeholder="First Name" />
          <input placeholder="Email Address" />
          <h4>Select Method Of Payment</h4>
          <div className={style.paymentMethods}>
            <div className={style.paymentMethod}>
              <BankCard />
              <label>Creadit Card Or Debit</label>
              <input type="checkbox" />
            </div>

            <div className={style.paymentMethod}>
              <BankAccount />
              <label>Bank Account</label>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <div className={style.rightSide}>
          <input placeholder="Last Name" />
          <textarea placeholder="Address for delivery" />
          <input placeholder="Mobile phone" />
        </div>
      </form>
      <button className={style.payButton}>Go Payment</button>
    </>
  );
}
