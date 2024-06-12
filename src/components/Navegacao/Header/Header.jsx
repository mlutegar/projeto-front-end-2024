import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {HeaderStyle, Tab} from "./Style";
import Sidebar from "../Sidebar/Sidebar";
import {AiOutlineMenu} from "react-icons/ai";
const logo = "/imagens/icons/logo.png";

const get_page = (url) => {
  // Find the first '/' after the protocol
  const firstSlashIndex = url.indexOf('/', url.indexOf('://') + 3);
  if (firstSlashIndex === -1) return null;

  // Get the substring from the first '/' to the end of the URL
  const subPath = url.substring(firstSlashIndex + 1);

  // Split the substring by '/' and reverse the array
  const parts = subPath.split('/').reverse();

  // Find the first non-empty part, which is the current page
  for (let part of parts) {
    if (part) return part;
  }

  // Return null if no valid page is found
  return null;
};

export { get_page };

const Header = ({ onSidebarToggle }) => {
  const [sidebar, setSidebar] = useState(false);
  let pagina_atual = get_page(window.location.href);

  if (pagina_atual === null || pagina_atual === '') {
    pagina_atual = 'Dashboard';
  }

  const [activeTab, setActiveTab] = useState(pagina_atual);

  console.log(activeTab);
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