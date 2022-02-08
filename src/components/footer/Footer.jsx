import React from "react";
import { LocationIcon, PhoneIcon, SubmitIcon } from "../../assets/icons/Icons";
import style from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={style.footerWrapper}>
      <div className={style.footerContent}>
        <h2>Funiro.</h2>
        <span>
          Worldwide furniture store since 2020. We sell over 1000+ branded
          products on our website
        </span>
        <span>
          <LocationIcon /> Sawojajar Malang, Indonesia
        </span>
        <span>
          <PhoneIcon /> +6289 456 3455
        </span>
        <span>www.funiro.com</span>
      </div>
      <div className={style.footerContent}>
        <h2>Menu</h2>
        <span>Products</span>
        <span>Rooms</span>
        <span>Inspirations</span>
        <span>About us</span>
        <span>Terms & Policiy</span>
      </div>
      <div className={style.footerContent}>
        <h2>Stay Connected</h2>
        <span>Facebook</span>
        <span>Instagram</span>
        <span>Twitter</span>
      </div>
      <div className={style.footerContent}>
        <h2>Stay Updated</h2>
        <span className={style.submitContainer}>
          <input placeholder="Enter your email" />
          <SubmitIcon />
        </span>
      </div>
    </div>
  );
}
