import React from "react";
import style from "./tabs.module.scss";
import profile from "../../assets/images/profile.jpg";
export default function UserInfo() {
  return (
    <div className={style.tabWrapper}>
      <div className={style.form}>
        <img src={profile} />
        <label>Name</label>
        <input placeholder="name" value={"Kadir"} />
        <label>Lastname</label>
        <input placeholder="lastname" value={"Develioglu"} />
        <label>Email</label>
        <input placeholder="Email" value={"develioglu306@gmail.com"} />
        <label>Address</label>
        <textarea value={"fatih mahallesi Adana"} />

        <button>Save</button>
      </div>
    </div>
  );
}
