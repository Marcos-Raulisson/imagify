// Importa as funções necessárias do React
import { createContext, useState } from "react";

// Cria um contexto global chamado `AppContext` que será usado para compartilhar dados entre componentes
export const AppContext = createContext();

const AppContextProvider = (props) => {
  // Define um estado chamado `user` para armazenar informações do usuário (exemplo: login, nome, etc.)
  const [user, setUser] = useState(null);

  // Define um estado chamado `showLogin` para controlar a visibilidade do modal de login
  const [showLogin, setShowLogin] = useState(false);

  // Cria um objeto `value` que contém os estados e funções para compartilhamento
  const value = {
    user, // Estado do usuário
    setUser, // Função para atualizar o estado `user`
    showLogin, // Estado para controlar a exibição do login
    setShowLogin, // Função para atualizar o estado `showLogin`
  };

  return (
    // Usa o `Provider` do contexto para compartilhar o objeto `value` com todos os componentes filhos
    <AppContext.Provider value={value}>
      {/* Renderiza os componentes filhos passados como `props.children` */}
      {props.children}
    </AppContext.Provider>
  );
};

// Exporta o provedor para ser usado na aplicação
export default AppContextProvider;
