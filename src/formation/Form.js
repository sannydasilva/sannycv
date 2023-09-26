import "./form.css";
import React, { useState } from "react";

import imageOclock from "../assets/oclock.png";
import imageIfocop from "../assets/ifocop.png";
import imageAfpa from "../assets/afpa.png";

const Form = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  return (
    <>
      <h1 className="title-form">Formation</h1>
      <div className="form-container">
        <div className="first-form">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={imageOclock} alt="oclock logo" />
            </figure>
            <div
              className="form-card"
              onClick={() => setIsClicked(true)}
              style={{ filter: isClicked ? "opacity(1)" : "opacity(0.1)" }}
            >
              <p className="form-description">
                If a dog chews shoes whose shoes does he choose? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Odio omnis quod
                debitis officiis, labore sit ipsum suscipit reprehenderit magni
                laborum neque ducimus ratione fuga. Magnam optio inventore totam
                quaerat sapiente vel, sed iste. Magnam quibusdam, fugiat ex
                ipsum quisquam molestias, at unde accusamus ad voluptas neque.
                Architecto dolorum molestiae iste! olor sit amet consectetur
                adipisicing elit. Odio omnis quod debitis officiis, labore sit
                ipsum suscipit reprehenderit magni laborum neque ducimus ratione
                fuga. Magnam optio inventore totam quaerat sapiente vel, sed
                iste. Magnam quibusdam, fugiat ex ipsum quisquam molestias, at
                unde accusamus ad voluptas neque. Architecto dolorum molestiae
                iste!
              </p>
            </div>
          </div>
        </div>
        <div className="first-form">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={imageIfocop} alt="ifocop logo" />
            </figure>
            <div
              className="form-card"
              onClick={() => setIsClicked1(true)}
              style={{ filter: isClicked1 ? "opacity(1)" : "opacity(0.1)" }}
            >
              <p className="form-description">
                If a dog chews shoes whose shoes does he choose? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Odio omnis quod
                debitis officiis, labore sit ipsum suscipit reprehenderit magni
                laborum neque ducimus ratione fuga. Magnam optio inventore totam
                quaerat sapiente vel, sed iste. Magnam quibusdam, fugiat ex
                ipsum quisquam molestias, at unde accusamus ad voluptas neque.
                Architecto dolorum molestiae iste!
              </p>
            </div>
          </div>
        </div>
        <div className="first-form">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={imageAfpa} alt="afpa logo" className="form-img" />
            </figure>
            <div
              className="form-card"
              onClick={() => setIsClicked2(true)}
              style={{ filter: isClicked2 ? "opacity(1)" : "opacity(0.1)" }}
            >
              <p className="form-description">
                If a dog chews shoes whose shoes does he choose? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Odio omnis quod
                debitis officiis, labore sit ipsum suscipit reprehenderit magni
                laborum neque ducimus ratione fuga. Magnam optio inventore totam
                quaerat sapiente vel, sed iste. Magnam quibusdam, fugiat ex
                ipsum quisquam molestias, at unde accusamus ad voluptas neque.
                Architecto dolorum molestiae iste!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
