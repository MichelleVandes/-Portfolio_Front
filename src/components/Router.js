import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Me from "../pages/Backoffice";
import Err404 from "../pages/Err404";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/me" element={<Me />}></Route>
          <Route path="*" element={<Err404 />}></Route>
        </Routes>
      </BrowserRouter>
    );
};

export default Router;