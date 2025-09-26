import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={styles.switcherContainer}>
      <button
        onClick={toggleLanguage}
        className={`${styles.switch} ${language === 'en' ? styles.enActive : ''}`}
        aria-label="Change language"
      >
        <div className={styles.flag}>🇧🇷</div>
        <div className={styles.flag}>🇺🇸</div>
        <div className={styles.handle}></div>
      </button>
    </div>
  );
}
