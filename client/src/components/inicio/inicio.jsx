import React from "react";
import "./inicio.css";
import "../../styles.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const cTickets = 800;



function Inicio() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <div className="row">
        <div className="bg-gris">
          <img
            className="front-img"
            src={require("../../assets/images/gusano.png")}
            alt="Gusano feliz"
          />
        </div>
        <div className="bg-gris">
          <p className="big-text">
            {t(`tickets`)}
            <br />

            {t(`totales`)}
            <p className="huge-text"> {cTickets} </p>
          </p>
        </div>
      </div>
      <div className="bg-gris boton">
        <Link to="/tiempo-real">
          {t(`ver-conteo`)} <br />
          {t(`tiempo-real`)}
        </Link>
      </div>
    </div>
  );
}

export default Inicio;
