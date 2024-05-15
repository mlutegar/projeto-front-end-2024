import React from 'react'
import { Container } from './Style'
import {Link as RouterLink} from "react-router-dom";

const SidebarItem = ({ Icon, Text, link }) => {
    return (
        <Container>
            <Icon />
            <RouterLink to={link}>
                {Text}
            </RouterLink>
        </Container>
    )
}

export default SidebarItem