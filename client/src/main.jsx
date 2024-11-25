// Importa a função `createRoot` da biblioteca React DOM para inicializar a renderização do React.
import { createRoot } from "react-dom/client";

// Importa o componente `BrowserRouter` da biblioteca `react-router-dom`,
// usado para gerenciar as rotas no aplicativo React.
import { BrowserRouter } from "react-router-dom";

// Importa o contexto personalizado `AppContextProvider`,
// fornece estado e funções globais para os componentes do aplicativo.
import AppContextProvider from "./context/AppContext.jsx";

// Importa o arquivo de estilos principal do aplicativo.
import "./index.css";

// Importa o componente principal da aplicação, `App`, que contém a estrutura e
// a lógica principal do aplicativo React.
import App from "./App.jsx";

// Seleciona o elemento HTML com o ID "root" no documento.
// Este será o ponto de montagem do aplicativo React.
createRoot(document.getElementById("root")).render(
  // Envolve o aplicativo em um `BrowserRouter` para habilitar a navegação baseada em rotas.
  <BrowserRouter>
    {/* Envolve o aplicativo no provedor de contexto para fornecer dados globais
        e gerenciar o estado compartilhado em todo o aplicativo. */}
    <AppContextProvider>
      {/* Renderiza o componente principal do aplicativo. */}
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
