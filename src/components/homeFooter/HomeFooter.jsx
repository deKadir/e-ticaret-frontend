import style from "./hfooter.module.scss";
import React from "react";
import {
  GuarantieeIcon,
  TrophyIcon,
  CustomerServiceIcon,
  ShippingIcon,
} from "./../../assets/icons/Icons";

const items = [
  {
    icon: TrophyIcon,
    title: "High Quality",
    description: "Crafted from top materials",
  },
  {
    icon: GuarantieeIcon,
    title: "Warrany Protection",
    description: "Over 2 years",
  },
  {
    icon: ShippingIcon,
    title: "Free Shipping",
    description: "Order over 150$",
  },
  {
    icon: CustomerServiceIcon,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];
export default function HomeFooter() {
  return (
    <div className={style.homeFooter}>
      {items.map((item, key) => {
        return (
          <div className={style.homeFooterItem}>
            <aside>{<item.icon />}</aside>
            <div>
              <p>{item.title}</p>
              <span>{item.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
