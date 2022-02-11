import React from "react";
import style from "./tabs.module.scss";
import UserInfo from "./UserInfo";
import Item from "../shoppingCartBody/Item";
import ChangePassword from "./ChangePassword";
import Orders from "./Orders";
export default function TabsContainer() {
  return (
    <div className={style.profileWrapper}>
      <div className={style.profileSidebar}>
        <ul>
          <li>
            <a className={style.active}>Profile</a>
          </li>
          <li>
            <a>Change password</a>
          </li>

          <li>
            <a>Orders</a>
          </li>
          <li>
            <a>Billing</a>
          </li>
        </ul>
      </div>
      <div className={style.profileContent}>
        <Orders />
      </div>
    </div>
  );
}
