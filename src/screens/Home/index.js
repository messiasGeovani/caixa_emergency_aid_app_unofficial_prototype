// home screen component
import React from 'react';

// styles
import {
    Container,
    Title,
    Description,
    Background,
    Logos,
    Button
} from './styles';

function Home() {
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
                    <Button register>
                        <Description registerButton>
                            Realize sua solicitação
                        </Description>
                    </Button>
                    <Button status>
                        <Description statusButton>
                            Acompanhe sua solicitação
                        </Description>
                    </Button>
                </Container>
            </Container>
        </>
    );
}

export default Home;