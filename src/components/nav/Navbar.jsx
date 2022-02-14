import React, { useEffect, useState } from "react";
import { CartIcon, HearthIcon } from "../../assets/icons/Icons";
import { SearchInput } from "../inputs/Inputs";
import style from "./navbar.module.scss";
import profile from "../../assets/images/profile.jpg";

import { CustomDropdown } from "../dropdown/Dropdown";
import { roomsDropdown, productsDropdown } from "./../../constants/DummyData";
import { Link } from "react-router-dom";
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
        <a href={"/"}>
          <h2>Funiro.</h2>
        </a>
        <CustomDropdown title={"Products"} data={productsDropdown} />
        <CustomDropdown title={"Rooms"} data={roomsDropdown} />
        <a href="/#inspiration">Inspiration</a>
        <SearchInput placeholder="Search for minimalist chair" />
      </div>
      <div className={style.userSide}>
        <Link to={"/wishlist"}>
          <HearthIcon width={24} height={24} />
        </Link>
        <Link to={"/cart"}>
          <CartIcon width={24} height={24} />
        </Link>

        <Link to={"/settings/profile"}>
          <img src={profile} alt="profile" />
        </Link>
      </div>
    </div>
  );
}
