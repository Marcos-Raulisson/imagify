// Importa as bibliotecas e hooks necessários
import React, { useContext } from 'react'; // React para componentes e useContext para acessar o contexto global.
import { Routes, Route } from 'react-router-dom'; // Ferramentas para gerenciar rotas.

// Importa as páginas que serão renderizadas em diferentes rotas
import Result from './pages/Result';
import Home from './pages/Home';
import BuyCredit from './pages/BuyCredit';

// Importa componentes compartilhados entre as páginas
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';

// Importa o contexto da aplicação para acessar variáveis e funções globais
import { AppContext } from './context/AppContext';

const App = () => {
  // Obtém o valor `showLogin` do contexto global usando o hook `useContext`
  const { showLogin } = useContext(AppContext);

  return (
    // Define um contêiner principal com classes do Tailwind CSS
    // para estilização e layout responsivo.
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      
      {/* Renderiza a barra de navegação (Navbar) no topo */}
      <Navbar />
      
      {/* Exibe o componente de login condicionalmente, dependendo de `showLogin` */}
      {showLogin && <Login />}
      
      {/* Define as rotas do aplicativo usando `Routes` e `Route` */}
      <Routes>
        {/* Define a rota para a página inicial */}
        <Route path='/' element={<Home />} />
        {/* Define a rota para a página de resultados */}
        <Route path='/result' element={<Result />} />
        {/* Define a rota para a página de compra de créditos */}
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
      
      {/* Renderiza o rodapé (Footer) */}
      <Footer />
    </div>
  );
};

export default App; // Exporta o componente para ser usado no resto do aplicativo.
