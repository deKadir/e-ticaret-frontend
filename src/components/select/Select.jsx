import React, { useState } from "react";
import style from "./select.module.scss";
import { ArrowIcon } from "../../assets/icons/Icons";
export default function Select({ title = "", data = [] }) {
  const [dropdown, setDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(title);
  console.log(data);

  const handleChange = (e) => {
    setSelectedItem(e.target.innerText);
  };
  return (
    <div className={style.selectWrapper}>
      <div
        className={style.selectTitle}
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        <label>{selectedItem}</label>
        <ArrowIcon />
        {dropdown && data.length ? (
          <div className={style.selectBody}>
            {data.map((item, index) => (
              <label onClick={handleChange} key={index}>
                {item}
              </label>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
