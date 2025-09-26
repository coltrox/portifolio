import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sobre.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

// 1. Importe a sua foto de perfil aqui
import profilePhoto from '../imgs/foto-coltro.jpg';

export default function Sobre() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <aside className={styles.leftColumn}>
          {/* 2. Adicione a imagem aqui */}
          <img src={profilePhoto} alt="Foto de Pedro Coltro" className={styles.profilePic} />
          
          <h2 className={styles.connectTitle}>{t.about_connect_title}</h2>
          <div className={styles.socialLinks}>
            <a href="mailto:pedrocoltro.dev@gmail.com" title="Email">
              <img alt="Email" src="https://cdn-icons-png.flaticon.com/512/732/732200.png"/>
            </a>
            <a href="https://www.linkedin.com/in/pedro-henrique-soares-da-costa-coltro-497833386/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img alt="LinkedIn" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"/>
            </a>
            <a href="https://github.com/coltrox" target="_blank" rel="noopener noreferrer" title="GitHub">
              <img alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"/>
            </a>
          </div>
        </aside>
        <main className={styles.rightColumn}>
          <section className={styles.intro}>
            <h1>Pedro Coltro</h1>
            <p className={styles.subtitle}>{t.about_subtitle}</p>
            <p>{t.about_intro_text}</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.about_goal_title}</h2>
            <p>{t.about_goal_text}</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.about_tech_title}</h2>
            <div className={styles.techGrid}>
              <img alt="HTML5" title="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
              <img alt="CSS3" title="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
              <img alt="JavaScript" title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
              <img alt="React" title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
              <img alt="Java" title="Java" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"/>
              <img alt="Python" title="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>
              <img alt="C" title="C" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"/>
              <img alt="Git" title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"/>
              <img alt="Figma" title="Figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"/>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.about_tools_title}</h2>
            <ul className={styles.toolList}>
              {t.about_tools_list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </section>
          <blockquote className={styles.quote}>{t.about_quote}</blockquote>
        </main>
      </div>
      <Link to="/" className={styles.backLink}>&larr; {t.projects_back_link}</Link>
    </div>
  );
}