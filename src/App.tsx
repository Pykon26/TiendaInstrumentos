import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InstrumentoDetalle from "./pages/InstrumentoDetalle";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instrumento/:id" element={<InstrumentoDetalle />} />
      </Routes>
    </Router>
  );
};

export default App;
