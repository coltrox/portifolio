import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import TypingText from './TypingText';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Hero.module.css';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  // A animação agora começa sempre como 'false' ao carregar a página.
  const [animationComplete, setAnimationComplete] = useState(false);

  // Estados para controlar a sequência APENAS se a animação estiver em andamento.
  const [showName, setShowName] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  
  // Callbacks para cada etapa da animação.
  const handleGreetingComplete = useCallback(() => setShowName(true), []);
  const handleNameComplete = useCallback(() => setShowSubtitle(true), []);
  const handleSubtitleComplete = useCallback(() => {
    // No final, apenas marca a animação como concluída para esta visualização.
    setAnimationComplete(true);
  }, []);

  return (
    <section className={styles.heroSection}>
      <LanguageSwitcher />
      
      <div className={styles.mainContent}>
        <h1 className={styles.titleContainer}>
          <span className={styles.titleIntro}>
            {/* Se a animação já terminou, mostra o texto estático. */}
            {animationComplete ? t.hero_intro : (
              <TypingText
                text={t.hero_intro}
                speed={70}
                onComplete={handleGreetingComplete}
              />
            )}
          </span>
          
          {/* O nome aparece estático ou animado, dependendo do estado. */}
          {(showName || animationComplete) && (
            <span className={styles.titleName}>
              {animationComplete ? t.hero_name : (
                <TypingText
                  text={t.hero_name}
                  speed={120}
                  onComplete={handleNameComplete}
                />
              )}
            </span>
          )}
        </h1>

        {/* O subtítulo aparece estático ou animado. */}
        {(showSubtitle || animationComplete) && (
          <p>
            {animationComplete ? t.hero_subtitle : (
              <TypingText
                text={t.hero_subtitle}
                speed={40}
                onComplete={handleSubtitleComplete}
              />
            )}
          </p>
        )}
      </div>

      {/* Os links aparecem se a animação tiver terminado. */}
      {animationComplete && (
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
