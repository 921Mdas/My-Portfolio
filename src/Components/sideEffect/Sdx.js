import React from "react";
import "./sdx.scss";
import icon1 from "../../assets/geometry.png";
import icon2 from "../../assets/colorball.png";
import icon3 from "../../assets/shapes.png";
import icon4 from "../../assets/react.png";
import icon5 from "../../assets/django.png";
import icon6 from "../../assets/python.png";
import { useState } from "react";

const Sdx = () => {
  const [pos, setPos] = useState(0);
  window.addEventListener("scroll", () => {
    setPos(window.scrollY);
  });

  return (
    <>
      <div className="sdx">
        <img
          src={icon1}
          className="img_prlx"
          style={{
            transform: `translateY(${
              pos < 500 ? pos : 500
            }px) rotate(${pos}deg)`,
          }}
          alt=""
        />
        <img
          src={icon2}
          className="img_prlx"
          alt=""
          style={{
            transform: `translateY(${-pos}px) rotate(${pos}deg)`,
          }}
        />
        <img
          src={icon3}
          className="img_prlx"
          alt=""
          style={{
            transform: `translateY(${-pos}px) rotate(${-pos}deg)`,
          }}
        />
        <img
          src={icon4}
          className="img_prlx"
          alt=""
          style={{
            transform: `translateY(${-pos}px) rotate(${pos}deg)`,
          }}
        />
      </div>
      <div className="counter">{pos}px</div>
    </>
  );
};

export default Sdx;
