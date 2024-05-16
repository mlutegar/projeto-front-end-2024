import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HeaderStyle } from "./Style";
import Sidebar from "../Sidebar/Sidebar";

const logo = "/imagens/icons/logo.png";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <div>
      <HeaderStyle>
        <div id='nav1'>
          <button className="hamburguer" onClick={showSidebar}>☰</button>
          <Link to="/dashboard"><img src={logo} alt="Company Logo" /></Link>
        </div>

        <div id='nav2'>
          <Link to="/dashboard">Home</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/perfil">Conta</Link>
        </div>
      </HeaderStyle>

      {sidebar && <Sidebar active={setSidebar} />}
    </div>
  );
};

export default Header;
