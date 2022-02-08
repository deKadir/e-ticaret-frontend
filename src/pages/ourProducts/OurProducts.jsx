import React from "react";
import furniture_1 from "../../assets/images/furniture_1.jpg";
import furniture_2 from "../../assets/images/furniture_2.jpg";
import furniture_3 from "../../assets/images/furniture_3.png";
import furniture_4 from "../../assets/images/furniture_4.jpg";
import furniture_5 from "../../assets/images/furniture_5.jpg";
import style from "./our.module.scss";
import Products from "../../components/products/Products";
const productItems = [
  {
    img: furniture_1,
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: 124,
    discount: 12,
  },
  {
    img: furniture_2,
    title: "Lolito",
    description: "Luxury big sofa",
    price: 89,
    discount: 30,
  },
  {
    img: furniture_3,
    title: "Respira",
    description: "Minimalist fan",
    price: 912,
    discount: 20,
  },
  {
    img: furniture_1,
    title: "Grifo",
    description: "Night lamp",
    price: 521,
    discount: 10,
  },
  {
    img: furniture_1,
    title: "Muggo",
    description: "Small mug",
    price: 301,
    discount: 0,
  },
];
export default function OurProducts() {
  return (
    <div className={style.ourProductsWrapper}>
      <h1>Our Products</h1>
      <Products products={productItems} />
    </div>
  );
}
