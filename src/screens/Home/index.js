// home screen component
import React, { useState } from 'react';

// styles
import {
    Container,
    Title,
    Description,
    Background,
    Logos,
} from './styles';

// components
import Button from '../../components/Button'
import Alert from '../../components/Alert'

function Home({ navigation }) {
    // alert config
    const [alert, setAlert] = useState(false)
    
    // dev profile info
    const profileData = {
        title: 'Descupe',
        description: 'Este app é só um protótipo, portanto não tem todas as funcionalidades.\nPara se cadastrar no programa, use o app oficial.'
    }

    return (
        <>
            <Background />

            <Alert 
                visible={alert}
                info={profileData}
                action={() => setAlert(false)}
            />

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
                        action={() => setAlert(true)}
                    />
                </Container>
            </Container>
        </>
    );
}

export default Home;