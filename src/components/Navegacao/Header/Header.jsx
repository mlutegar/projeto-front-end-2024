import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { HeaderStyle } from "./Style";
import Sidebar from "../Sidebar/Sidebar";
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
            <div>
              <button className="hamburguer" onClick={showSidebar}>☰</button>
            </div>
            <div>
              <Link to="/dashboard"><img src={logo} alt="Company Logo" /></Link>
            </div>
          </div>

          <div id='nav2'>
            <Link to="/dashboard">Home</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/perfil">Conta</Link>
          </div>
        </HeaderStyle>

        {sidebar && <Sidebar active={setSidebar} />}
        {sidebar && <div style={{ height: '70px' }} />} {/* Adiciona um espaço reservado */}
      </div>
  );
};

export default Header;
