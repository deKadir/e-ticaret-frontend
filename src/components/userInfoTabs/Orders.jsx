import React from "react";
import style from "./tabs.module.scss";
import Item from "../shoppingCartBody/Item";
export default function Orders() {
  return (
    <div className={style.tabWrapper}>
      <h4>Orders</h4>
      <div className={style.orders}>
        <div className={style.order}>
          <Item />
        </div>
        <div className={style.order}>order1</div>
      </div>
    </div>
  );
}
