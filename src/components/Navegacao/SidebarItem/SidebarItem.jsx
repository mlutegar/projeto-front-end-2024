import React from 'react'
import { Container } from './Style'
import {Link as RouterLink} from "react-router-dom";

const SidebarItem = ({ Icon, Text, link }) => {
    return (
        <RouterLink to={link}>
        <Container>
            <Icon />
                {Text}
        </Container>
        </RouterLink>
    )
}

export default SidebarItem