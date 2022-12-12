import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Index from "./page/index";
import "../src/style/index.css";
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
