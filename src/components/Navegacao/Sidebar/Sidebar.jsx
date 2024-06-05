import React from 'react'
import { SideBarStyle} from './Style'
import {
  FaHome,
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
      <SideBarStyle sidebar={active}>
        <div className="opcoes">
          <SidebarItem Icon={FaHome} Text="Menu" link={"/dashboard"} />
          <SidebarItem Icon={FaChartBar} Text="Serviços" link={"/servicos"} />
          <SidebarItem Icon={FaBell} Text="Calibrações" link={"/calibracoes"} />
          <SidebarItem Icon={FaUser} Text="Conta" link={"/perfil"} />
        </div>
      </SideBarStyle>
  )
}

export default Sidebar