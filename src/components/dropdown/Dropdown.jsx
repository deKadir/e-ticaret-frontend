import style from "./dropdown.module.scss";
import React, { useState } from "react";
import { ArrowIcon } from "../../assets/icons/Icons";
export const CustomDropdown = ({ title, data = [] }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={style.dropdownWrapper}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <div className={style.title}>
        {title}
        <ArrowIcon />
      </div>

      {active && (
        <div className={style.dropdownItems}>
          {data.map((item, key) => {
            return (
              <a className={style.dropdownItem} key={key}>
                {item}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
