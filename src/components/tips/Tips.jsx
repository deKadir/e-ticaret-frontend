import React, { useState } from "react";
import style from "./tips.module.scss";
import tips_1 from "../../assets/images/tips_1.png";
import tips_2 from "../../assets/images/tips_2.jpg";
import tips_3 from "../../assets/images/tips_3.jpg";
import "@brainhubeu/react-carousel/lib/style.css";
import { ScrolLeftArrow, ScrolRightArrow } from "../../assets/icons/Icons";
import Carousel, {
  autoplayPlugin,
  Dots,
  slidesToScrollPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
const tips = [
  {
    img: tips_1,
    description: "How to create a living room to love",
    time: "17 jan 2020",
  },
  {
    img: tips_2,
    description: "Solution for clean look working space",
    time: "21 jan 2020",
  },
  {
    img: tips_3,
    description: "Make your cooking activity more fun with good setup",
    time: "27 jan 2020",
  },
];
export default function Tips() {
  const [value, setValue] = useState(0);
  const onChange = (value) => {
    if (value >= tips.length) {
      setValue(0);
    } else {
      setValue(value);
    }
  };
  return (
    <div className={style.tipsWrapper}>
      <h1>Tips & Tricks</h1>
      <div className={style.contents}>
        <span className={style.arrowLeft} onClick={() => setValue(value - 1)}>
          <ScrolLeftArrow />
        </span>
        <span className={style.arrowRight} onClick={() => setValue(value + 1)}>
          <ScrolRightArrow />
        </span>
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
                numberOfSlides: 3,
              },
            },
            {
              resolve: slidesToScrollPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ]}
          animationSpeed={3000}
        >
          {tips.map((item, key) => {
            return (
              <div key={key} className={style.content}>
                <img src={item.img} alt="tip" />
                <p>{item.description}</p>
                <span>{item.time}</span>
              </div>
            );
          })}
        </Carousel>
      </div>
      <Dots
        value={value}
        number={tips.length}
        onChange={(e) => setValue(e)}
        thumbnails={tips.map((p, index) => {
          return (
            <span
              className={index === value ? style.activeDot : style.dots}
            ></span>
          );
        })}
      />
    </div>
  );
}
