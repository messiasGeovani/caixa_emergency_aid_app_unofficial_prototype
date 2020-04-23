// info screen component
import React, { useContext } from 'react'

// main navigator consumer
import { MainNavigatorContext } from '../../config/contexts'

// styles
import {
    Container,
    Title,
    Description,
    InfoIcon,
    List
} from './styles'

// components
import Header from '../../components/Header'
import Button from '../../components/Button'

function Info({ navigation }) {
    const content = require('./content')
    const mainNavigation = useContext(MainNavigatorContext)

    return (
        <>
            <Header 
                title="Auxílio emergencial" 
                description="Para ter acesso ao Auxílio Emergencial, você deve cumprir os seguintes requisitos:" 
            />

            <Container main>
                <List>
                    {content.map((item) => (
                        <>
                            <Container text>
                                <InfoIcon />
                                <Title>
                                    { item.title }
                                </Title>
                            </Container>
                            <Description>
                                { item.description }
                            </Description>
                        </>
                    ))}

                    <Container buttons>
                        <Button type="back" title="Voltar" action={() => mainNavigation.goToHomeScreen()} />
                        <Button type="primary" title="Entendi, avaliar este app" action={() => navigation.navigate('RegisterScreen')} />
                    </Container> 
                </List>                               
            </Container>
        </>
    )
}

export default Info