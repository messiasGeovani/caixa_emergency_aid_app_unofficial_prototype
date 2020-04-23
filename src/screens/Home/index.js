// home screen component
import React, { useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native'

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
    const [alertData, setAlertData] = useState({})
    
    // dev profile info
    const profileData = {
        title: 'Descupe',
        description: 'Este app é só um protótipo, portanto não tem todas as funcionalidades.\nPara se cadastrar no programa, use o app oficial.'
    }

    useEffect(async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                  title: "Permissões do app",
                  message: "Olá tudo bem?\nEste app precisa de algumas permissões para um bom funcionamento.\nNada demais, porém precisamos de uma força sua.",
                  buttonPositive: "Tudo bem"
                }
            );

            if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                setAlertData({
                    title: 'Atenção!',
                    description: 'Infelizmente você não concedeu as permissões necessárias para o app, portanto ele pode não funcionar muito bem.\nEspero que não tenha problemas, no entanto não diga que eu não te avisei...'
                })
            } 

        } catch (err) {
            setAlertData({
                title: 'Erro',
                description: 'Houve algum problema ao tentarmos obter as permissões, mas não fique triste, qualquer coisa reinicie o celular, mas se o problema percistir, reinstalar o app pode ser uma boa idéia.'
            })
            console.log(err)
        }
    }, [])

    return (
        <>
            <Background />

            <Alert 
                visible={alert}
                info={alertData}
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
                        action={() => {
                            setAlertData(profileData)
                            setAlert(true)
                        }}
                    />
                </Container>
            </Container>
        </>
    );
}

export default Home;