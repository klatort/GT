import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Inicio from "./components/inicio/inicio";
import Historial from "./components/historial/historial";
import Espera from "./components/espera/espera";
import TiempoReal from "./components/tiempo-real/tiempo-real";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/espera" element={<Espera />} />
          <Route path="/tiempo-real" element={<TiempoReal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
