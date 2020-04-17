// info screen component
import React from 'react'
// styles
import {
    Container,
    Title,
    Description,
    InfoIcon
} from './styles'

// components
import Header from '../../components/Header'
import Button from '../../components/Button'

function Info({ navigation }) {
    const content = require('./content')

    return (
        <>
            <Header 
                title="Auxílio emergencial" 
                description="Para ter acesso ao Auxílio Emergencial, você deve cumprir os seguintes requisitos:" 
            />

            <Container main>
                {content.map(item => (
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
                    <Button type="back" title="Voltar" action={() => navigation.pop()} />
                    <Button type="primary" title="Entendi, testar formulários" action={() => {}} />
                </Container>                
            </Container>
        </>
    )
}

export default Info