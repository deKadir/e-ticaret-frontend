import React, { useState } from "react";
import style from "./inspiration.module.scss";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel";
import { productItems } from "../../constants/DummyData";

export default function Inspiration() {
  const [value, setValue] = useState(0);

  const onChange = (value) => {
    if (value >= productItems.length) {
      setValue(0);
    } else {
      setValue(value);
    }
  };
  return (
    <div className={style.inspirationWrapper}>
      <div className={style.contentSide}>
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button>Explore More</button>
      </div>
      <div className={style.gallerySide}>
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
            ]}
            animationSpeed={3000}
          >
            {productItems.map((item, key) => {
              return <img src={item.img} key={key} />;
            })}
          </Carousel>
          <Dots
            value={value}
            onChange={(e) => setValue(e)}
            thumbnails={productItems.map((p, index) => {
              return (
                <span
                  className={index === value ? style.activeDot : style.dots}
                >
                  1
                </span>
              );
            })}
          />
        </div>
      </div>
    </div>
  );
}
