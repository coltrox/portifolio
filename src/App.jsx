import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Hero from "./components/Hero";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <LanguageProvider>
      {/* AQUI ESTÁ A CORREÇÃO: Adicione a propriedade basename */}
      <BrowserRouter basename="/portfolio/">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;