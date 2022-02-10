import React from "react";
import style from "./auth.module.scss";
export default function Login() {
  return (
    <div className={style.componentWrapper}>
      <h1>Sign in</h1>
      <label>Email</label>
      <input placeholder="text1@gmail.com" />
      <div className={style.labelContainer}>
        <label>Password</label>
        <a>Forgot Password?</a>
      </div>
      <input type="password" placeholder="Password" />
      <button>Sign in</button>
      <label className={style.option}>
        Dont have account? <a>Sign up</a>
      </label>
    </div>
  );
}
