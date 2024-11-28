// Importa as funções necessárias do React
import { createContext, useEffect, useState, } from "react";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

// Cria um contexto global chamado `AppContext` que será usado para compartilhar dados entre componentes
export const AppContext = createContext();

const AppContextProvider = (props) => {
  // Define um estado chamado `user` para armazenar informações do usuário (exemplo: login, nome, etc.)
  const [user, setUser] = useState(null);

  // Define um estado chamado `showLogin` para controlar a visibilidade do modal de login
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'))

  const [credit, setCredit] = useState(false)
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const navigate = useNavigate()

  const loadCreditsData = async ()=>{
    try{
      const {data} = await axios.get(`${backendUrl}/api/user/credits`, {headers:{token}})

      if(data.success){
        setCredit(data.credits)
        setUser(data.user)
      }
    }catch(error){
      console.log(error)
      toast.error(error.message)
    }
  }

  const generateImage = async (prompt)=>{
    try{
      const {data} = await axios.post(`${backendUrl}/api/image/generate-image`, {prompt}, {headers: {token}})

      if(data){
        loadCreditsData()
        return data.resultImage
      }else{
        toast.error(data.message)
        loadCreditsData()
        if(data.creditBalance ===0){
          navigate('/buy')
        }
      }
    }catch(error){
      toast.error(error.message)
    }
  }

  const logout = ()=>{
    localStorage.removeItem('token');
    setToken('')
    setUser(null)
  }
  
  useEffect(()=>{if(token){
    loadCreditsData()
  }},[token])
  
  // Cria um objeto `value` que contém os estados e funções para compartilhamento
  const value = {
    user, // Estado do usuário
    setUser, // Função para atualizar o estado `user`
    showLogin, // Estado para controlar a exibição do login
    setShowLogin, // Função para atualizar o estado `showLogin`
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage
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
