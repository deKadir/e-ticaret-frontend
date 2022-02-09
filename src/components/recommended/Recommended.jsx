import React, { useState } from "react";
import style from "./recommended.module.scss";
import Carousel, {
  autoplayPlugin,
  Dots,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import { productItems } from "../../constants/DummyData";
import Content from "../../components/products/Content";
import { ScrolLeftArrow, ScrolRightArrow } from "../../assets/icons/Icons";

export default function Recommended() {
  const [value, setValue] = useState(0);
  const onChange = (val) => {
    setValue(val);
  };
  return (
    <div className={style.recommendedWrapper}>
      <h1>Also You May Like</h1>
      <div className={style.carouselWrapper}>
        <Carousel
          value={value}
          onChange={onChange}
          plugins={[
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 5000,
              },
            },
            {
              resolve: slidesToShowPlugin,

              options: {
                numberOfSlides: 4,
              },
            },
          ]}
          animationSpeed={3000}
        >
          {productItems.map((item, key) => {
            return (
              <div className={style.productContainer}>
                <Content product={item} key={key} />
              </div>
            );
          })}
        </Carousel>
        <Dots
          value={value}
          onChange={(e) => setValue(e)}
          thumbnails={productItems.map((p, index) => {
            return (
              <span className={index === value ? style.activeDot : style.dots}>
                1
              </span>
            );
          })}
        />
        <span
          className={style.leftArrow}
          onClick={() => {
            onChange(value - 1);
          }}
        >
          <ScrolLeftArrow />
        </span>
        <span
          className={style.rightArrow}
          onClick={() => {
            onChange(value + 1);
          }}
        >
          <ScrolRightArrow />
        </span>
      </div>
    </div>
  );
}
