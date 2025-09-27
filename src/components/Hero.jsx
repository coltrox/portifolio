import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import TypingText from './TypingText';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Hero.module.css';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const [greetingDone, setGreetingDone] = useState(false);
  const [nameDone, setNameDone] = useState(false);
  const [subtitleDone, setSubtitleDone] = useState(false);

  useEffect(() => {
    setGreetingDone(false);
    setNameDone(false);
    setSubtitleDone(false);
  }, [language]);


  const handleGreetingComplete = useCallback(() => setGreetingDone(true), []);
  const handleNameComplete = useCallback(() => setNameDone(true), []);
  const handleSubtitleComplete = useCallback(() => setSubtitleDone(true), []);

  if (!t) {
    return null; 
  }

  return (
    <section className={styles.heroSection}>
      <LanguageSwitcher />
      
      <div className={styles.mainContent}>
        <h1 className={styles.titleContainer}>
          <span className={styles.titleIntro}>
            <TypingText
              key={`greeting-${language}`} 
              text={t.hero_intro}
              speed={70}
              onComplete={handleGreetingComplete}
            />
          </span>
          
          {}
          {greetingDone && (
            <span className={styles.titleName}>
              <TypingText
                key={`name-${language}`}
                text={t.hero_name}
                speed={120}
                onComplete={handleNameComplete}
              />
            </span>
          )}
        </h1>

        {}
        {nameDone && (
          <p>
            <TypingText
              key={`subtitle-${language}`}
              text={t.hero_subtitle}
              speed={40}
              onComplete={handleSubtitleComplete}
            />
          </p>
        )}
      </div>

      {}
      {subtitleDone && (
        <div className={styles.linksContainer}>
          <Link to="/projetos" className={styles.navLink}>
            {t.hero_button_projects}
          </Link>
          <Link to="/sobre" className={styles.navLink}>
            {t.hero_button_about}
          </Link>
        </div>
      )}
    </section>
  );
}