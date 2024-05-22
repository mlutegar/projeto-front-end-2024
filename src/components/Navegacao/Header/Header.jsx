import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { HeaderStyle } from "./Style";
import Sidebar from "../Sidebar/Sidebar";
import {AiOutlineMenu} from "react-icons/ai";
const logo = "/imagens/icons/logo.png";

const Header = ({ onSidebarToggle }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  useEffect(() => {
    onSidebarToggle(sidebar);
  }, [sidebar, onSidebarToggle]);

  return (
      <div>
        <HeaderStyle className={sidebar ? 'active' : ''}>
          <div id='nav1'>
              <button className="hamburguer" onClick={showSidebar}><AiOutlineMenu /></button>
            <div id='logo'>
              <Link to="/dashboard"><img src={logo} alt="Company Logo" /></Link>
            </div>
          </div>

          <div id='nav2'>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/servicos">Serviços</Link>
          </div>
        </HeaderStyle>

        {sidebar && <Sidebar active={setSidebar} />}
        {sidebar && <div style={{ height: '70px' }} />} {/* Adiciona um espaço reservado */}
      </div>
  );
};

export default Header;