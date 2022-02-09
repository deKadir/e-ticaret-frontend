import React from "react";
import style from "./detail.module.scss";
import detail_1 from "../../assets/images/product_detail_1.jpg";
import detail_2 from "../../assets/images/product_detail_2.jpg";
import detail_3 from "../../assets/images/product_detail_3.jpg";
import { LocationIcon } from "../../assets/icons/Icons";
import Select from "../select/Select";
const size = ["small", "medium", "large"];
export default function ProductDetail() {
  return (
    <div className={style.detailWrapper}>
      <div className={style.productInfo}>
        <img src={detail_1} />
        <img src={detail_2} />
        <div className={style.buyOptions}>
          <h1>Checked Duvet Cover Set</h1>
          <h4>39.99$</h4>
          <span>Light khaki green/white checks</span>
          <small>{<LocationIcon />}Available in store</small>
          <Select title={"Select Size"} data={size} />
          <div className={style.amount}>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <button>ADD TO SHOPPING BAG</button>
        </div>
      </div>
      <div className={style.conscious}>
        <img src={detail_3} />
        <div className={style.description}>
          <p>Conscious</p>
          <p>
            Conscious Twin duvet cover set in soft, woven fabric made from a
            Tencel™lyocell and cotton blend with a printed pattern. One
            pillowcase. Thread count 144.
          </p>
          <span>
            <small>Composition — </small> Cotton 50%, Lyocell 50%
          </span>
          <br />
          <span>
            <small> Art. No. — </small>0643448004
          </span>
        </div>
      </div>
    </div>
  );
}
