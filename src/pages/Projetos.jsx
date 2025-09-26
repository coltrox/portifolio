import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projetos.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

// Importe as imagens
import petlarImage from '../imgs/petlar-photo.jpg';
import apiAdocaoImage from '../imgs/api-adocao.png';
import appNavegacaoImage from '../imgs/navegacao-telas.png';
import snakeGameImage from '../imgs/snake-game2.png';

// Array de dados estáticos (que não mudam com o idioma, como imagens e tecnologias)
const staticProjectsData = [
  { imageUrl: petlarImage, tech: ['Desenvolvimento Web', 'Mobile', 'UI/UX Design', 'Sistemas Embarcados (Arduino)'], liveUrl: null, repoUrl: 'https://github.com/coltrox/pet-lar' },
  { imageUrl: apiAdocaoImage, tech: ['Node.js', 'Express.js', 'Sequelize', 'SQLite', 'JWT', 'bcrypt'], liveUrl: null, repoUrl: 'https://github.com/coltrox/Api-Adocao-Venturus' },
  { imageUrl: appNavegacaoImage, tech: ['React Native', 'React Navigation', 'AsyncStorage', 'JavaScript'], liveUrl: null, repoUrl: 'https://github.com/coltrox/App-Navegacao-De-Telas' },
  { imageUrl: snakeGameImage, tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Canvas'], liveUrl: 'https://coltrox.github.io/Snake-Game/', repoUrl: 'https://github.com/coltrox/Snake-Game' },
];

export default function Projetos() {
  // 1. Conecta-se ao sistema de idiomas
  const { language } = useLanguage();
  const t = translations[language];

  // 2. Combina os dados traduzidos (título, descrição) com os dados estáticos (imagem, links)
  const projectsData = t.projects_data.map((project, index) => ({
    ...project,
    ...staticProjectsData[index],
  }));

  return (
    <section className={styles.page}>
      <div className={styles.mainContent}>
        {/* 3. Usa as traduções para os textos da página */}
        <h2 className={styles.heading}>{t.projects_title}</h2>
        <p className={styles.description}>{t.projects_description}</p>
        
        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img src={project.imageUrl} alt={`Imagem do projeto ${project.title}`} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.tech.map((tech, i) => ( <span key={i} className={styles.techTag}>{tech}</span> ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>{t.projects_link_site}</a>}
                  {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>{t.projects_link_repo}</a>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/" className={styles.backLink}>&larr; {t.projects_back_link}</Link>
      </div>
    </section>
  );
}