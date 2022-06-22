import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "presentation/components/layout/Menu";

import Home from "../screens/Home";
import Clients from "../screens/Clients";
import StyledStructure from "./Structure.styled";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <StyledStructure className="structure">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<Clients />} />
            <Route path="/prestamos" element={<Clients />} />
            <Route path="/estadisticas" element={<h1>Estadisticas</h1>} />
          </Routes>
        </StyledStructure>
      </BrowserRouter>
    </>
  );
};

export default Router;
