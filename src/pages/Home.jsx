import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TypingText from "../components/TypingText";
import "./Home.css"; 

const Home = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <TypingText
        text="Olá, eu sou Pedro Coltro"
        speed={100}
        onComplete={() => setShowSecondLine(true)}
      />

      {showSecondLine && (
        <>
          <TypingText
            text="Atualmente estou no segundo ano de Desenvolvimento de Sistemas na Etec Bento Quirino"
            speed={50}
          />
          <div className="button-group">
            <button className="btn btn-projects" onClick={() => navigate("/projetos")}>
              Meus Projetos
            </button>
            <button className="btn btn-about" onClick={() => navigate("/sobre")}>
              Mais Sobre Mim
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
