import React, { createContext, useState, useContext } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => (translations[language][key]);

  // Déterminez la direction du texte en fonction de la langue sélectionnée
  const textDirection = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {/* Utilisez la direction du texte déterminée */}
      <div style={{ direction: textDirection }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
