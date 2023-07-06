import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./tiempo-real.css";
import "../../styles.css";

function TiempoReal() {
  const { t, i18n } = useTranslation();
  const [horario, setHorario] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/horario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ arg:  i18n.language }),
    })
      .then((res) => res.json())
      .then((data) => setHorario(data));
  }, []);
  const [cTickets, setTickets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  });

  return (
    <div className="page">
      <div className="row">
        {typeof horario.horario === "undefined" ||
        typeof cTickets.tickets === "undefined" ? (
          <p className="huge-text contrast">{t(`espere`)}</p>
        ) : (
          <>
            <div>
              <p className="big-text" style={{ color: "black" }}>
                {t(`horario`)}
                <br />
                <p className="hora-comida huge-text">{horario.horario[0]}</p>
              </p>
              <p style={{ paddingLeft: "55px" }}>
                {t(`inicio-tickets`)} {horario.horario[1]}
              </p>
            </div>
            <div className="bg-gris">
              <p className="big-text">
                {t(`tickets`)}
                <br />
                {t(`restantes`)}
                <p className="huge-text"> {cTickets.tickets} </p>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TiempoReal;
