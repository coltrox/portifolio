import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projetos.module.css';

// Importe as imagens dos seus projetos
import petlarImage from '../imgs/petlar-photo.jpg';
import apiAdocaoImage from '../imgs/api-adocao.png';
// Supondo que você salvou a nova imagem como 'app-navegacao.png'
import appNavegacaoImage from '../imgs/navegacao-telas.png';

// DADOS DOS PROJETOS - Links do GitHub adicionados!
const projectsData = [
  {
    title: '🐾 PetLar - Adoção Consciente',
    imageUrl: petlarImage,
    description: 'Aplicativo (web/mobile) que promove a adoção responsável de pets, conectando animais a adotantes com base no espaço físico da residência e perfil comportamental.',
    tech: ['Desenvolvimento Web', 'Mobile', 'UI/UX Design', 'Sistemas Embarcados (Arduino)'],
    liveUrl: null,
    repoUrl: 'https://github.com/coltrox/pet-lar', // Link adicionado
  },
  {
    title: '🐾 API de Adoção de Pets',
    imageUrl: apiAdocaoImage,
    description: 'API RESTful para gerenciar uma plataforma de adoção, incluindo cadastro, animais, fila de adoção, doações e rotas administrativas protegidas por JWT.',
    tech: ['Node.js', 'Express.js', 'Sequelize', 'SQLite', 'JWT', 'bcrypt'],
    liveUrl: null,
    repoUrl: 'https://github.com/coltrox/Api-Adocao-Venturus', // Link adicionado
  },
  {
    title: '📱 App de Navegação de Telas',
    imageUrl: appNavegacaoImage, // Imagem adicionada
    description: 'Aplicativo mobile com sistema de login, navegação por menu lateral (Drawer), persistência de sessão com AsyncStorage e listas dinâmicas (FlatList e SectionList).',
    tech: ['React Native', 'React Navigation', 'AsyncStorage', 'JavaScript'],
    liveUrl: null,
    repoUrl: 'https://github.com/coltrox/App-Navegacao-De-Telas', // Link adicionado
  },
];

export default function Projetos() {
  // O resto do componente continua o mesmo
  return (
    <section className={styles.page}>
      <div className={styles.mainContent}>
        <h2 className={styles.heading}>Meus Projetos</h2>
        <p className={styles.description}>Uma seleção de alguns trabalhos que desenvolvi.</p>
        
        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img src={project.imageUrl} alt={`Imagem do projeto ${project.title}`} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>Ver Site</a>}
                  {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>Código Fonte</a>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/" className={styles.backLink}>
          &larr; Voltar para o início
        </Link>
      </div>
    </section>
  );
}