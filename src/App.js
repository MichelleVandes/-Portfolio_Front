import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/MyData";
import Cv from "./pages/MyCv"
import Err404 from "./pages/Err404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/me" element={<Me />}></Route>
      <Route path="/CV" element={<Cv />}></Route>
      <Route path="*" element={<Err404 />}></Route>
    </Routes>
  );
};

export default App;
