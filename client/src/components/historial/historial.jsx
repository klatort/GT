import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles.css";

function Historial() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t(`f`)}</h1>
    </div>
  );
}

export default Historial;
