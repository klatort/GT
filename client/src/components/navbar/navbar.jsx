import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import LanguageMenu from "../language-menu/language-menu";
import { useTranslation } from "react-i18next";
import "./navbar.css";
import "../../styles.css";

function Navbar() {
  const { i18n, t } = useTranslation();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setShowLanguageMenu(false);
  };

  return (
    <header
      className="navbar"
      style={
        showLanguageMenu
          ? { borderRadius: "20px 20px 0 20px" }
          : { borderRadius: "20px" }
      }
    >
      <div className="navbar-logo">
        <img
          src={require("../../assets/images/logo.png")}
          alt="Gusano tracker"
        />
      </div>
      <div>
        <nav className="navbar-menu">
          <ul>
            <li>
              <Link className="nav-item" to="/">
                {t(`inicio`)}
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/historial">
                {t(`historial`)}
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/espera">
                {t(`espera`)}
              </Link>
            </li>
            <li onClick={() => setShowLanguageMenu(!showLanguageMenu)}>
              <FiGlobe className="nav-item" size={24} />
              {showLanguageMenu && (
                <div className="language-container">
                  <LanguageMenu
                    languages={["es", "en"]}
                    onLanguageChange={handleLanguageChange}
                  />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
