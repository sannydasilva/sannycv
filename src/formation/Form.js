import "../formation/form.css";

import imageOclock from "../assets/oclock.png";
import imageIfocop from "../assets/ifocop.png";
import imageAfpa from "../assets/afpa.png";

const Form = () => {
  return (
    <>
      <h1 className="title-form">Formation</h1>
      <div className="form-container">
        <div className="first-form">
          <div className="card bg-base-100 shadow-xl">
            <details className="dropdown ">
              <summary
                className="m-1 btn bg-black"
                style={{ display: "contents" }}
              >
                <figure>
                  <img
                    className="img-form"
                    src={imageOclock}
                    alt="oclock logo"
                  />
                  <h2>Stagiaire développeur Fullstack JavaScript</h2>
                </figure>
              </summary>

              <div className="p-2 shadow menu dropdown-content z-[1] bg-black rounded-box w-auto">
                <p className="form-description">
                  Formation intensive de 6 mois axée sur ledéveloppement web
                  avec JavaScript
                </p>
                <ul style={{ color: "white", fontSize: "0.9rem" }}>
                  <li className="li-oclock">
                    Développement Front-end : HTML, CSS, JAVASCRIPT
                  </li>
                  <li className="li-oclock">
                    Développement Back-end : NODE.JS, DATABASE, SEQUELIZE
                  </li>
                  <li className="li-oclock">Mise en production du site</li>
                  <li className="li-oclock">Spécialisation Front avec REACT</li>
                </ul>{" "}
                <br />
                <p style={{ fontSize: "0.8rem" }}>
                  Titre visé : développeur web, web mobile, niveau 5 (passage du
                  titre novembre 2023)
                </p>
              </div>
            </details>
          </div>
        </div>
        <div className="first-form">
          <div className="card bg-base-100 shadow-xl">
            <details className="dropdown ">
              <summary
                className="m-1 btn bg-black"
                style={{ display: "contents" }}
              >
                <figure>
                  <img
                    className="img-form"
                    src={imageIfocop}
                    alt="ifocop logo"
                  />
                  <h2 style={{ marginLeft: "10px" }}>
                    Stagiaire technicienne comptable
                  </h2>
                </figure>
              </summary>

              <p className="p-2 shadow menu dropdown-content z-[1] bg-black rounded-box w-auto">
                Formation intensive de 6 mois axée sur ledéveloppement web avec
                JavaScript
              </p>
            </details>
          </div>
        </div>
        <div className="first-form3">
          <div className="card bg-base-100 shadow-xl">
            <details className="dropdown ">
              <summary
                className="m-1 btn bg-black"
                style={{ display: "contents" }}
              >
                <figure className="figure-first-form3">
                  <img className="img-form" src={imageAfpa} alt="afpa logo" />
                </figure>
              </summary>

              <p className="form-description">
                If a dog chews shoes whose shoes does he choose? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Odio omnis quod
                debitis officiis, labore sit ipsum suscipit reprehenderit magni
                laborum neque ducimus ratione fuga. Magnam optio inventore totam
                qudog chews shoes whose shoes does he choose? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Odio omnis quod debitis
                officiis, labore sit ipsum suscipit reprehenderit magni laborum
                neque ducimus ratione fuga. blablabla
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
