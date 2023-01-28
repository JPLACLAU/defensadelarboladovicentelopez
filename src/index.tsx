import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

const container = document.getElementById("root");
if (!container) throw new Error("root container not found");

createRoot(container).render(
  <StrictMode>
    <header>
      <h1>Defensa del arbolado Vicente López | Galería</h1>

      <a
        href="https://www.instagram.com/defensadelarboladovicentelopez/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Instagram
      </a>
      <a
        href="https://www.facebook.com/groups/defensadelarboladovicentelopez/?ref=share&mibextid=S66gvF"
        target="_blank"
        rel="noreferrer noopener"
      >
        Facebook
      </a>
      <h3>
        Vecinos del MUNICIPIO DE VICENTE LÓPEZ AGRUPADOS en DEFENSA de NUESTROS
        ÁRBOLES. Con la CRISIS CLIMÁTICA que vivimos, se necesitan CAMBIOS
        URGENTES!
      </h3>
    </header>
    <main>
      <App />
    </main>
    <h4>Última actualización: Enero 2023</h4>
  </StrictMode>
);
