import React from "react";
import "./404.css";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="title">404</h1>
      <p className="error-paragraphe">La page que vous demandez n'existe pas</p>
      <NavLink to="/sannycv">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Retour à l'accueil
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
