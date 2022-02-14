import React from "react";
import style from "./tabs.module.scss";
export default function ChangePassword() {
  return (
    <div className={style.tabWrapper}>
      <div className={style.form}>
        <label>Current Password</label>
        <input placeholder="" />
        <label>New Password</label>
        <input placeholder="" />
        <label>New password</label>
        <input placeholder="" />
        <button>Save</button>
      </div>
    </div>
  );
}
