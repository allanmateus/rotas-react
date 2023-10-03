import "./styles.css";
import { Link, Route, Routes } from "react-router-dom";
import Roupas from "./components/Roupas";
import Calcados from "./components/Calcados";
import Acessorios from "./components/Acessorios";
import Inicial from "./components/Inicial";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Alli Store</h1>
        <nav>
          <ul>
            <li>
              <Link className="Link" to="/">
                Página inicial
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="Link" to="/roupas">
                Roupas
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="Link" to="/calcados">
                Calçados
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="Link" to="/acessorios">
                Acessórios
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/roupas" element={<Roupas />} />
          <Route path="/calcados" element={<Calcados />} />
          <Route path="/acessorios" element={<Acessorios />} />
        </Routes>
      </main>
    </div>
  );
}
