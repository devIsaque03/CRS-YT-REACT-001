import { StrictMode } from "react"; // Chamando indicador de problemas
import { createRoot } from "react-dom/client"; // Função que renderiza REACT no DOM
import Home from "./pages/Home/Index.jsx"; // Importando o componente principal (Sem nome... Chama index automáticamente)
import "./index.css"; // Importando CSS

// Identificando elemento DOM e renderizando o REACT
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);

/** Sumário:
 *
 * import { StrictMode } from 'react'
 *
 * O StrictMode é um componente do React que ajuda a
 * identificar potenciais problemas no aplicativo. Ele ativa verificações
 * e avisos adicionais no desenvolvimento para destacar práticas que
 * podem causar problemas em versões futuras do React.
 *
 *
 * import { createRoot } from 'react-dom/client'
 *
 * createRoot é usada para criar um "root" (raiz) para a renderização do
 * React no DOM. Este é um método moderno que faz parte da nova API de
 * renderização do React, que foi introduzida no React 18.
 *
 *
 * document.getElementById('root')
 *
 * Esse trecho obtém o elemento DOM com o ID root.
 *
 *
 * createRoot(...).render(...)
 *
 * Essa função cria o ponto de entrada para a renderização do React no DOM.
 *
 *
 * <StrictMode>
 *
 * O conteúdo do React (neste caso, o componente App) está sendo envolvido
 * dentro do StrictMode. Isso ativa verificações de desenvolvimento para
 * encontrar possíveis erros.
 *
 *
 * <App />
 *
 * O componente App é renderizado dentro do StrictMode
 */
