import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../../styles.css";
import "./espera.css";

function Espera() {
  const { t } = useTranslation();

  const [personas, setPersonas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/personas")
      .then((res) => res.json())
      .then((data) => setPersonas(data));
  }, []);

  const getImageRows = () => {
    const imageRows = [];
    let currUsers = 7;
    for(let i = 3; i > 0; i--) {
      currUsers -= i;
      const imageRow = Array.from({ length:  currUsers > 0? i : i + currUsers }).map((_, index) => (
        <img
          key={index}
          src={require("../../assets/images/silueta2.png")}
          alt={`persona ${index}`}
        />
      ));
      imageRows.push(imageRow);
      if(currUsers < 0) break;
    }
    return imageRows;
  };

  return (
    <div className="page">
      {typeof personas.comensales === "undefined" ? (
        <div className="row">
          <p className="huge-text contrast">{t(`espere`)}</p>
        </div>
      ) : (
        <div className="image-container">
            {getImageRows().map((row, index) => (
              <div key={index} className="image-row">
                {row}
              </div>
            ))
          }
        <p className="huge-text contrast">{t(`personas1`)} {personas.comensales[0]} {t(`personas2`)}</p>
        </div>
      )}
    </div>
  );
}

export default Espera;
