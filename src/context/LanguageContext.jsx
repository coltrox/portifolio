import React, { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto
const LanguageContext = createContext();

// 2. Cria o Provedor do Contexto
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('pt'); // 'pt' é o padrão

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'pt' ? 'en' : 'pt'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Cria um Hook customizado para usar o contexto mais facilmente
export function useLanguage() {
  return useContext(LanguageContext);
}
