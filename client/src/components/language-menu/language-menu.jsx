import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageMenu = ({ languages, onLanguageChange }) => {
  const { t } = useTranslation();

  const handleLanguageClick = (language) => {
    onLanguageChange(language);
  };

  return (
    <div className="language-menu">
      {languages.map((language) => (
        <div
          key={language}
          className="language-option"
          onClick={() => handleLanguageClick(language)}
        >
          {t(`languageNames.${language}`)}
        </div>
      ))}
    </div>
  );
};

export default LanguageMenu;
