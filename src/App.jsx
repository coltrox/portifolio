// App.js (ou seu arquivo principal de rotas)

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero"; // Página inicial
import Projetos from "./pages/Projetos"; // Página de projetos
import Sobre from "./pages/Sobre"; // Página Sobre

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Hero />} />

        {/* Rota para a página de projetos */}
        <Route path="/projetos" element={<Projetos />} />

        {/* Rota para a página sobre mim */}
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;