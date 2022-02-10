import React from "react";
import style from "./auth.module.scss";

export default function Register() {
  return (
    <div className={style.componentWrapper}>
      <h1>Sign up</h1>
      <label>Email</label>
      <input placeholder="text1@gmail.com" />

      <label>Password</label>

      <input type="password" placeholder="Password" />
      <label>Verify Password</label>
      <input type="password" placeholder="Password" />
      <button>Sign up</button>
      <label className={style.option}>
        Dont have account? <a>Sign in</a>
      </label>
    </div>
  );
}
