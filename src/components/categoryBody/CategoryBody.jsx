import React, { useState } from "react";
import { Products } from "..";
import { FilterIcon } from "../../assets/icons/Icons";
import { productItems } from "../../constants/DummyData";
import style from "./body.module.scss";
export default function CategoryBody() {
  const [showItems, setShowItems] = useState(false);
  return (
    <div className={style.categoryBodyWrapper}>
      <div className={style.categorySide}>
        <div className={style.sideItem}>
          <h4>New Arrivals</h4>
          <span>New Arrivals</span>
        </div>
        <div className={style.sideItem}>
          <h4>Shop By Room</h4>
          <span
            onClick={() => {
              setShowItems(!showItems);
            }}
          >
            Bedroom
          </span>
          {showItems && (
            <>
              <small>Bed</small>

              <small>Pillow</small>
            </>
          )}
          <span>Living Room</span>
          <span>Child Room</span>
          <span>Bath Room</span>
          <span>Outdoor</span>
        </div>
        <div className={style.sideItem}>
          <h4>Shop By Concept</h4>
          <span>Conscious</span>
          <span>Premium Quality</span>
          <span>Classic Collection</span>
        </div>
        <div className={style.sideItem}>
          <h4>Gender</h4>
          <div className={style.check}>
            <input type="checkbox" />
            <label>Male</label>
          </div>
          <div className={style.check}>
            <input type="checkbox" />
            <label>Female</label>
          </div>
        </div>
        <div className={style.sideItem}>
          <h4>Price</h4>
          <div className={style.check}>
            <input type="checkbox" />
            <label>0$ - 40$</label>
          </div>
          <div className={style.check}>
            <input type="checkbox" />
            <label>40$ - 100$</label>
          </div>
          <div className={style.check}>
            <input type="checkbox" />
            <label>100$ - 150$</label>
          </div>
          <div className={style.check}>
            <input type="checkbox" />
            <label>150$ - 175$</label>
          </div>
          <div className={style.check}>
            <input type="checkbox" />
            <label>175$ - 250$</label>
          </div>
          <div className={style.check}>
            <input type="checkbox" />
            <label>250$ - 350$</label>
          </div>
        </div>
      </div>
      <div className={style.categoryProducts}>
        <h1>Bedroom</h1>
        <p>
          Its easy to transform your bedroom interior with our great selection
          of accessiories
        </p>

        <div className={style.filter}>
          Filter
          <FilterIcon />
        </div>

        <Products products={productItems} />
      </div>
    </div>
  );
}
