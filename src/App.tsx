/**
 * Raiz da aplicação: apenas delega para o roteador (react-router-dom).
 */
import './App.css';
import Rotas from './router/rotas.jsx';

function App() {
  return <Rotas />;
}

export default App;
