import React from "react";
import style from "./shopping.module.scss";
import { CloseIcon, HearthIcon } from "../../assets/icons/Icons";
import product_1 from "../../assets/images/product_detail_1.jpg";
import Select from "../select/Select";
export default function Item() {
  return (
    <div className={style.product}>
      <img src={product_1} />
      <div className={style.productInfo}>
        <h4>Checked Duvet Cover Set</h4>
        <h4>39.99 $</h4>
        <table>
          <tr>
            <td>Art no.</td>
            <td>509283921</td>
            <td>Size:</td>
            <td>21*45</td>
          </tr>
          <tr>
            <td>Color:</td>
            <td>Mint</td>
            <td>Total:</td>
            <td>39.99</td>
          </tr>
        </table>
        <div className={style.options}>
          <HearthIcon />
          <Select title="1" />
        </div>
        <span className={style.closeIcon}>
          <CloseIcon />
        </span>
      </div>
    </div>
  );
}
