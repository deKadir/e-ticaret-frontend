import React from "react";
import style from "./auth.module.scss";
export default function ForgotPassword() {
  return (
    <div className={style.componentWrapper}>
      <label>Email</label>
      <input placeholder="text1@gmail.com" />

      <button>Send mail</button>
      <label className={style.option}>
        Dont receive message? <a>Send again</a>
      </label>
    </div>
  );
}
