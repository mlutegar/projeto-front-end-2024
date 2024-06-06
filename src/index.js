import React from "react";
import {createRoot} from "react-dom/client";

import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Calibracoes from "./pages/Calibracoes";
import Servicos from "./pages/Servicos";
import Perfil from "./pages/Perfil";
import ServicoPage from "./pages/ServicoPage";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/calibracoes" element={<Calibracoes/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/servico/:id" element={<ServicoPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/servicos" element={<Servicos/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
