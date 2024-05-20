import React from 'react'
import { Container} from './Style'
import { 
  FaTimes, 
  FaHome, 
  FaClock, 
  FaBell,
  FaUser,
  FaChartBar,
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <div className="opcoes">
        <h1>Sidebar</h1>
        <SidebarItem Icon={FaHome} Text="Menu" link={"/dashboard"} />
        <SidebarItem Icon={FaChartBar} Text="Serviços" link={"/servicos"} />
        <SidebarItem Icon={FaBell} Text="Calibrações" link={"/calibracoes"} />
        <SidebarItem Icon={FaUser} Text="Conta" link={"/perfil"} />
      </div>
    </Container>
  )
}

export default Sidebar