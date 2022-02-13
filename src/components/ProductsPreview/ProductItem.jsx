import React from "react";
import style from "./preview.module.scss";
import { CloseIcon, HearthIcon } from "../../assets/icons/Icons";
import product_1 from "../../assets/images/product_detail_1.jpg";
import Select from "../select/Select";
export default function ProductItem() {
  return (
    <div className={style.product}>
      <img src={product_1} alt="product" />
      <div className={style.productInfo}>
        <div className={style.productTitle}>
          <h4>Checked Duvet Cover Set</h4>

          <CloseIcon />
        </div>
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
      </div>
    </div>
  );
}
