import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "presentation/components/layout/Menu";

import Home from "../screens/Home";
import Clients from "../screens/Clients";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/estadisticas" element={<h1>Estadisticas</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
