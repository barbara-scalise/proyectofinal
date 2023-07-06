import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Carteras from "./pages/Carteras";
import Mochilas from "./pages/Mochilas";
import Riñoneras from "./pages/Riñoneras";
import Billeteras from "./pages/Billeteras";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
//import "bulma/css/bulma.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="SC" />
    </div>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ " element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="carteras" element={<Carteras />} />
          <Route path="carteras/:carteraId" element={<Carteras />} />
          <Route path="mochilas" element={<Mochilas />} />
          <Route path="mochilas/:mochilaId" element={<Mochilas />} />
          <Route path="rinioneras " element={<Riñoneras />} />
          <Route path="rinioneras/:rinioneraId" element={<Riñoneras />} />
          <Route path="billeteras " element={<Billeteras />} />
          <Route path="billeteras/:billeteraId" element={<Billeteras />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
