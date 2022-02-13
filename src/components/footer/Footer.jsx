import React from "react";
import { LocationIcon, PhoneIcon, SubmitIcon } from "../../assets/icons/Icons";
import style from "./footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={style.footerWrapper}>
      <div className={style.footerContent}>
        <h2>Funiro.</h2>
        <span>
          Worldwide furniture store since 2020. We sell over 1000+ branded
          products on our website
        </span>
        <a
          href="https://www.google.com/maps/d/u/0/viewer?gl=US&ie=UTF8&oe=UTF8&msa=0&mid=1G8nHzJ_9hfSUGhB0Bnn9V2OUN2c&ll=37.019391511922436%2C35.30405300000002&z=13"
          target="_blank"
          without
          rel="noreferrer"
        >
          <LocationIcon /> Adana, Turkey
        </a>
        <a href="tel:+905550463701">
          <PhoneIcon /> +90 555 046 37 01
        </a>
        <a href="/#home">www.funiro.com</a>
      </div>
      <div className={style.footerContent}>
        <h2>Menu</h2>
        <a href="/#products">Products</a>
        <Link to={"/rooms/bedroom"}>Rooms</Link>
        <a href="/#inspiration">Inspirations</a>
        <a href={"/"}> About us</a>
        <span>Terms & Policiy</span>
      </div>
      <div className={style.footerContent}>
        <h2>Stay Connected</h2>
        <a
          href="https://www.facebook.com"
          target={"_blank"}
          without
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com"
          target={"_blank"}
          without
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.twitter.com"
          target={"_blank"}
          without
          rel="noreferrer"
        >
          Twitter
        </a>
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
