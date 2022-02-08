import React from "react";
import { CartIcon, HearthIcon } from "../../assets/icons/Icons";
import { SearchInput } from "../inputs/Inputs";
import style from "./navbar.module.scss";
import profile from "../../assets/images/profile.jpg";

import { CustomDropdown } from "../dropdown/Dropdown";
import { products } from "./../../constants/DummyData";
import { DropdownIcon, IconButton } from "../iconButton/IconButton";

export default function Navbar() {
  return (
    <div className={style.navbarWrapper}>
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
