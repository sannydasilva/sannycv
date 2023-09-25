import logo from "../../assets/logo3.png";
import logogithub from "../../assets/githubLogo.png";
import logomail from "../../assets/mailLogo.png";
import logolinkedin from "../../assets/linkedinLogo.png";
import logotel from "../../assets/telLogo.png";

import { useState } from "react";
import "./header.css";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "999",
          }}
        >
          <div className="modal-box">
            <div className="modal-content">
              <h1>Mes coordonnées</h1>
              <div className="coordo-container">
                <ul>
                  <a href="mailto:sannydasilvasimoes@gmail.com">
                    <li>
                      <img src={logomail} alt="mail logo" />
                      sannydasilvasimoes@gmail.com
                    </li>
                  </a>

                  <Link
                    to="https://www.linkedin.com/in/sanny-da-silva/"
                    target="_blank"
                  >
                    <li>
                      <img src={logolinkedin} alt="linkedin logo" />
                      https://www.linkedin.com/in/sanny-da-silva/
                    </li>
                  </Link>
                  <Link to="https://github.com/sannydasilva" target="_blank">
                    <li>
                      <img src={logogithub} alt="github logo" />{" "}
                      https://github.com/sannydasilva
                    </li>
                  </Link>
                  <a href="tel:0651789423">
                    <li>
                      <img src={logotel} alt="tel logo" /> 0651789423
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="modal-action">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className="btn btn-primary"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar_start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                  <NavLink to="/exp">Expériences</NavLink>
                </li>
                <li>
                  <NavLink to="/form">Formations</NavLink>
                </li>
                <li>
                  <NavLink to="/hob">Hobbies</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <h1 className="name">Sanny Da Silva</h1>
            <h2 className="subtitle">Développeuse Web</h2>
          </div>
          <div className="navbar-end">
            <div className="logo">
              <button onClick={openModal}>
                <img
                  className="img-logo"
                  //   style={{ width: "20%" }}
                  src={logo}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
