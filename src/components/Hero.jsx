// Hero.jsx

import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import TypingText from "./TypingText";
import styles from './Hero.module.css';

export default function Hero() {
  // Novo estado para controlar a aparição do nome
  const [showName, setShowName] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  // A função onComplete do nome agora vai mostrar o subtítulo
  const handleNameComplete = useCallback(() => {
    setShowSubtitle(true);
  }, []);

  return (
    <section className={styles.heroSection}>
      
      <div className={styles.mainContent}>
        {/* O h1 agora é um container para os dois textos */}
        <h1 className={styles.titleContainer}>
          {/* Parte 1: "Olá, eu sou" */}
          <span className={styles.titleIntro}>
            <TypingText
              text="Olá, eu sou"
              speed={70}
              onComplete={() => setShowName(true)} // Ao terminar, ativa o showName
            />
          </span>

          {/* Parte 2: "Pedro Coltro", só aparece depois que o primeiro termina */}
          {showName && (
            <span className={styles.titleName}>
              <TypingText
                text="Pedro Coltro"
                speed={120} // Um pouco mais lento para dar mais impacto
                onComplete={handleNameComplete} // Ao terminar, mostra o subtítulo
              />
            </span>
          )}
        </h1>

        {/* O subtítulo só aparece depois que o nome termina de ser digitado */}
        {showSubtitle && (
          <p>
            <TypingText text="Desenvolvedor full stack web/mobile" speed={40} />
          </p>
        )}
      </div>

      {/* Os links só aparecem junto com o subtítulo */}
      {showSubtitle && (
        <div className={styles.linksContainer}>
          <Link to="/projetos" className={styles.navLink}>
            Meus Projetos
          </Link>
          <Link to="/sobre" className={styles.navLink}>
            Mais Sobre Mim
          </Link>
        </div>
      )}
    </section>
  );
}