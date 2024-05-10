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
        <SidebarItem Icon={FaHome} Text="Menu" />
        <SidebarItem Icon={FaChartBar} Text="Serviços" />
        <SidebarItem Icon={FaBell} Text="Notificação" />
        <SidebarItem Icon={FaClock} Text="Recentes" />
        <SidebarItem Icon={FaUser} Text="Conta" />
        <SidebarItem Icon={FaRegSun} Text="Login" />
        
        
      </Content>
    </Container>
  )
}

export default Sidebar