import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "presentation/components/layout/Menu";
import Home from "../screens/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<h1>Página de clientes</h1>} />
          <Route path="/estadisticas" element={<h1>Estadisticas</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
