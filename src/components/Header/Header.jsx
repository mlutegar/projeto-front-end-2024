import React, { useState } from 'react';
import { Link } from "react-router-dom";
 import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';
import { Top } from "./Style"; // Assuming 'Style' is a CSS module or styled-components file

const logo = "/imagens/icons/logo.png";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>  {/* Wrap everything in a single container */}
      <Top>  {/* Use existing 'Top' component for styling */}
        <div id='nav1'>  {/* Maintain existing 'nav1' structure */}
          <button className="hamburguer" onClick={showSidebar}>☰</button>  {/* Integrate hamburger button */}
          <img src={logo} alt="Company Logo" />  {/* Add alt text for accessibility */}
        </div>

        <div id='nav2'>  {/* Maintain existing 'nav2' structure */}
          <Link to="/dashboard">Home</Link>
          <Link to="/servicos">Serviços</Link>
          {window.sessionStorage.getItem('accessToken') ? (
            <Link to="/perfil">Conta</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </Top>

      {sidebar && <Sidebar active={setSidebar} />}  {/* Conditionally render Sidebar */}
    </div>
  );
};

export default Header;
