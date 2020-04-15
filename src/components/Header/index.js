// header component
import React from 'react'
// styles
import {
    Container,
    Title,
    Description,
    HeaderLogo
} from './styles'

function Header({ title, description }) {
    return (
        <Container>
            <HeaderLogo />
            <Title>
                { title }
            </Title>
            <Description>
                { description }
            </Description>
        </Container>
    )
}

export default Header