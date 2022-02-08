import React, { useState } from "react";
import style from "./button.module.scss";
export function DropdownIcon({ children, data = [] }) {
  const [active, setActive] = useState(false);
  return (
    <div className={style.buttonWrapper} onClick={() => setActive(!active)}>
      {active && <span></span>}
      <div className={style.buttonIcon}>
        {children}

        {active && (
          <div className={style.buttonDropdown}>
            <ul>
              {data.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export function IconButton({ children }) {
  return (
    <div className={style.buttonWrapper}>
      <a className={style.buttonIcon}>{children}</a>
    </div>
  );
}
