import React from 'react';
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Sobre Mim</h1>
      <p>Escreva aqui uma breve apresentação sobre você, suas habilidades, experiências e paixões.</p>
      
      <Link to="/" className="mt-8 inline-block text-blue-600 hover:underline">
        &larr; Voltar para o início
      </Link>
    </div>
  );
}