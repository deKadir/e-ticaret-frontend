import React from "react";
import style from "./auth.module.scss";
import Login from "./Login";
import { CustomerSvg } from "./../../assets/icons/Icons";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
export default function AuthPopup() {
  return (
    <div className={style.authWrapper}>
      <span onClick={() => console.log("wrapper")}></span>
      <div className={style.authPopup} onClick={() => console.log("content")}>
        <Register />
        <CustomerSvg />
      </div>
    </div>
  );
}
