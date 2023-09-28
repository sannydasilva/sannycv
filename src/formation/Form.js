import "../formation/form.css";

import imageOclock from "../assets/oclock.png";
import imageIfocop from "../assets/ifocop.png";
import imageAfpa from "../assets/afpa.png";

const Form = () => {
  return (
    <>
      <h1 className="title-form">Formation</h1>
      <div className="form-container">
        {/* OCLOCK */}
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
                  <div class="arrow"></div>
                  <h2 style={{ margin: "auto" }}>
                    Développeur Fullstack JavaScript
                  </h2>
                  <h3 style={{ color: "grey", marginRight: "3px" }}>2023</h3>
                </figure>
              </summary>

              <div className="form-description">
                <p>
                  Formation intensive de 6 mois axée sur ledéveloppement web
                  avec JavaScript
                </p>
                <ul style={{ color: "white", fontSize: "0.9rem" }}>
                  <li className="li-oclock">
                    - Développement Front-end : HTML, CSS, JAVASCRIPT
                  </li>
                  <li className="li-oclock">
                    - Développement Back-end : NODE.JS, DATABASE, SEQUELIZE
                  </li>
                  <li className="li-oclock">- Mise en production du site</li>
                  <li className="li-oclock">
                    - Spécialisation Front avec REACT
                  </li>
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

        {/* IFOCOP */}
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
                  <div class="arrow"></div>
                  <h2 style={{ margin: "auto" }}>Technicienne comptable</h2>
                  <h3 style={{ color: "grey", marginRight: "3px" }}>
                    2013
                    <br />
                    2014
                  </h3>
                </figure>
              </summary>

              <p className="form-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                enim consequuntur culpa corporis neque eos quae deserunt?
                Explicabo, minima beatae?
              </p>
            </details>
          </div>
        </div>

        {/* AFPA */}
        <div className="first-form3">
          <div className="card bg-base-100 shadow-xl">
            <details className="dropdown ">
              <summary
                className="m-1 btn bg-black"
                style={{ display: "contents" }}
              >
                <figure className="figure-first-form3">
                  <img className="img-form" src={imageAfpa} alt="afpa logo" />

                  <div class="arrow"></div>
                  <h2 style={{ margin: "auto" }}>Formation Bureautique</h2>
                  <h3 style={{ color: "grey", marginRight: "3px" }}>2005</h3>
                </figure>
              </summary>

              <p className="form-description">
                <ul style={{ color: "white", fontSize: "0.9rem" }}>
                  <li>- Environnement informatique, messagerie et internet</li>
                  <li>- Traitement de texte : Word</li>
                  <li>- Tableur : Excel</li>
                  <li>- Présentation de document : Powerpoint</li>
                </ul>
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
