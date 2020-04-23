// register screen component
import React, { useState, createRef, useContext } from 'react'
import {
    Platform
} from 'react-native'

// main navigator consumer
import { MainNavigatorContext } from '../../config/contexts'

// api methods
import { rateApp } from '../../services/api'

// styles
import {
    AppContainer,
    Container,
    Form,
    Title,
    NameInput,
    EmailInput,
    CityInput,
    RankInput,
    Description,
    InfoIcon
} from './styles'

// components
import Header from '../../components/Header'
import Button from '../../components/Button'
import Loading from '../../components/Loading'
import Alert from '../../components/Alert'

function Register({ navigation }) {
    // user data
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [rank, setRank] = useState('')

    // modal config
    const [loading, setLoading] = useState(false)

    const [alert, setAlert] = useState(false)
    const [alertData, setAlertData] = useState({
        title: '',
        description: ''
    })

    // inputs
    const _emailInput = createRef()
    const _cityInput = createRef()

    // main Navigation config
    const mainNavigation = useContext(MainNavigatorContext)
    
    const content = require('./content')

    // send info method
    const sendInfo = async () => {

        if (name === '' || email === '' || city === '' || rank === '') {
            setAlertData({
                title: 'Atenção',
                description: 'Preencha todos os campos.'
            })
            setAlert(true)
        } else {
            setLoading(true)

            try {
                const data = {
                    userName: name,
                    userEmail: email,
                    userCity: city,
                    rankLevel: rank
                }

                await rateApp(data)
                    .then(() => {
                        setLoading(false)
                        setAlertData({
                            title: 'Enviado!',
                            description: 'Pode parecer um ato simples, mas você me ajudou muito.\nObrigado por avaliar este app, desejo muito sucesso a você!'
                        })
                        setAlert(true)
                        })
            } catch (error) {
                setLoading(false)
                setAlertData({
                    title: 'Erro',
                    description: 'Algo de errado aconteceu ao enviar as informações.\nMas não se preocupe, daremos um jeito.'
                })
                setAlert(true)
                
                console.log(error)
            }
        }
    }

    return (
        <AppContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Container main>

                <Loading visible={loading} />
                <Alert 
                    visible={alert} 
                    info={alertData}
                    action={() => {
                        setAlert(false)
                        alertData.title === 'Enviado!' ? mainNavigation.goToHomeScreen() : false
                    }}
                />

                <Header 
                    title="Dados do cidadão" 
                    description="Gostaríamos de conhece-lo melhor. Se quiser, informe que você é e atribua uma nota à este protótipo" 
                />

                <Container form>

                    <Title label>
                        Nome
                    </Title>
                    <NameInput 
                        placeholder="Digite seu primeiro nome"
                        onChangeText={(text) => setName(text)}
                        returnKeyType="next"
                        onSubmitEditing={() => _emailInput.current.focus()}
                    />

                    <Title label>
                        Email
                    </Title>
                    <EmailInput
                        ref={_emailInput}
                        placeholder="Digite seu email"
                        onChangeText={(text) => setEmail(text)}
                        returnKeyType="next"
                        onSubmitEditing={() => _cityInput.current.focus()}
                    />

                    <Title label>
                        Cidade
                    </Title>
                    <CityInput 
                        ref={_cityInput}
                        placeholder="Digite sua cidade"
                        onChangeText={(text) => setCity(text)}
                    />

                    <Title label>
                        Nota
                    </Title>
                    <Container input>
                        <RankInput 
                            selectedValue={rank}
                            onValueChange={(value) => setRank(value)}
                        >
                            <RankInput.Item color="rgba(0, 0, 0, 0.2)" label="Selecione uma nota" value={''} />
                            <RankInput.Item label="Péssimo" value="pessimo" />
                            <RankInput.Item label="Regular" value="regular" />
                            <RankInput.Item label="Bom" value="bom" />
                            <RankInput.Item label="Excelente" value="excelente" />
                        </RankInput>
                    </Container>
                    
                    <Button type="submitForm" title="Enviar" action={() => sendInfo()} />
                
                </Container>


            </Container>

            <Container buttons>
                <Button type="back" title="Voltar" action={() => navigation.navigate('InfoScreen')} />
            </Container>

        </AppContainer>
    )
}

export default Register