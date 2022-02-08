import React from "react";
import style from "./hero.module.scss";
import furniture_1 from "../../assets/images/furniture_1.jpg";
import furniture_2 from "../../assets/images/furniture_2.jpg";
import furniture_3 from "../../assets/images/furniture_3.png";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import { ArrorRightIcon } from "./../../assets/icons/Icons";
export default function Hero() {
  return (
    <div className={style.heroContainer}>
      <div className={style.carouselWrapper}>
        <div className={style.heroContent}>
          <h1>High-Quality Furniture Just For You</h1>
          <p>
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </p>
          <button>Shop Now</button>
        </div>
        <Carousel
          plugins={[
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 5000,
              },
            },
          ]}
          animationSpeed={3000}
        >
          <div className={style.carouselItem}>
            <img src={furniture_1} />
            <div className={style.productInfo}>
              <h4>Bohauss</h4>
              <span>Luxury big sofa 2-seat</span>
              <p>100$</p>
              <ArrorRightIcon />
            </div>
          </div>
          <div className={style.carouselItem}>
            <img src={furniture_2} />
            <div className={style.productInfo}>
              <h4>Bohauss</h4>
              <span>Luxury big sofa 2-seat</span>
              <p>100$</p>
              <ArrorRightIcon />
            </div>
          </div>
          <div className={style.carouselItem}>
            <img src={furniture_3} />
            <div className={style.productInfo}>
              <h4>Bohauss</h4>
              <span>Luxury big sofa 2-seat</span>
              <p>100$</p>
              <ArrorRightIcon />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
