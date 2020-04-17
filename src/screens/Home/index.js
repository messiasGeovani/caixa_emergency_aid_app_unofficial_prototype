// home screen component
import React from 'react';

// styles
import {
    Container,
    Title,
    Description,
    Background,
    Logos,
} from './styles';

// UI components
import Button from '../../components/Button'

function Home({ navigation }) {
    return (
        <>
            <Background />

            <Container main>
                <Logos />

                <Container text>
                    <Description title>
                        Olá, bem vindo(a) ao
                    </Description>

                    <Title main>
                        Auxílio
                    </Title>
                    <Title main>
                        Emergencial
                    </Title>

                    <Title sub>
                        Protótipo não oficial
                    </Title>
                </Container>

                <Container buttons>
                    <Button 
                        type="primary"
                        title="Realize sua solicitação"
                        action={() => navigation.push('Register')}
                    />
                    <Button 
                        type="secondary" 
                        title="Acompanhe sua solicitação" 
                    />
                </Container>
            </Container>
        </>
    );
}

export default Home;