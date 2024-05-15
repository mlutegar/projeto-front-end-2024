import React from 'react'
import { Container, Content } from './Style'
import { 
  FaTimes, 
  FaHome, 
  FaClock, 
  FaBell, 
  FaRegSun, 
  FaRegFileAlt,
  FaUser,
  FaChartBar,
  FaCocktail
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Menu" link={"/dashboard"} />
        <SidebarItem Icon={FaChartBar} Text="Serviços" link={"/servicos"} />
        <SidebarItem Icon={FaBell} Text="Notificação" link={"/notificacoes"} />
        <SidebarItem Icon={FaClock} Text="Recentes" link={"/recentes"} />
        <SidebarItem Icon={FaUser} Text="Conta" link={"/perfil"} />
      </Content>
    </Container>
  )
}

export default Sidebar