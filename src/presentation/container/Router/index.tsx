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
          <Route path="/clientes" element={<Home />} />
          <Route path="/estadisticas" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
