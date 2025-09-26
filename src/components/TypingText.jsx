import { useState, useEffect } from 'react';

export default function TypingText({
  text = "",
  speed = 80,
  className = "",
  onComplete,
}) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Garante que o texto reinicie se a prop 'text' mudar.
    setDisplayedText('');

    const intervalId = setInterval(() => {
      // Usamos a forma funcional para ter acesso ao valor mais recente do estado.
      setDisplayedText((prev) => {
        // Se o texto exibido já estiver completo...
        if (prev.length === text.length) {
          // ...paramos o intervalo e encerramos.
          clearInterval(intervalId);
          // Chama a função onComplete, se ela existir.
          if (onComplete) {
            onComplete();
          }
          return prev;
        }

        // Caso contrário, adicionamos o próximo caractere.
        const nextChar = text.charAt(prev.length);
        return prev + nextChar;
      });
    }, speed);

    // Função de limpeza: essencial para parar o intervalo se o componente for removido da tela.
    return () => {
      clearInterval(intervalId);
    };
  }, [text, speed, onComplete]); // O efeito depende dessas props

  return <span className={className}>{displayedText}</span>;
}