import React, { useEffect, useState } from "react";
import { CartIcon, HearthIcon } from "../../assets/icons/Icons";
import { SearchInput } from "../inputs/Inputs";
import style from "./navbar.module.scss";
import profile from "../../assets/images/profile.jpg";

import { CustomDropdown } from "../dropdown/Dropdown";
import { products } from "./../../constants/DummyData";
import { DropdownIcon } from "../iconButton/IconButton";

export default function Navbar() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.pageYOffset);
    });
  }, [scroll]);
  return (
    <div
      className={style.navbarWrapper}
      style={
        scroll > 80
          ? {
              padding: " 5px 5%",
              backgroundColor: "white",
              boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
            }
          : {}
      }
    >
      <div className={style.shopSide}>
        <h2>Funiro.</h2>

        <CustomDropdown title={"Products"} data={products} />
        <CustomDropdown title={"Rooms"} data={products} />

        <a href="#">Inspiration</a>

        <SearchInput placeholder="Search for minimalist chair" />
      </div>
      <div className={style.userSide}>
        <HearthIcon width={24} height={24} />

        <CartIcon width={24} height={24} />

        <DropdownIcon data={["login", "register", "logout"]}>
          <img src={profile} />
        </DropdownIcon>
      </div>
    </div>
  );
}
