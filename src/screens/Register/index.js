// register screen component
import React, { useState, createRef } from 'react'
import {
    Platform
} from 'react-native'

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

function Register({ navigation }) {
    // user data
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [rank, setRank] = useState('')

    // inputs
    const _emailInput = createRef()
    const _cityInput = createRef()
    const _rankInput = createRef()
    
    const content = require('./content')

    const sendInfo = () => {
        alert('fush!')
    }

    return (
        <AppContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Container main>


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
                        returnKeyType="next"
                        onSubmitEditing={() => _rankInput.current.focus()}
                    />

                    <Title label>
                        Nota
                    </Title>
                    <RankInput 
                        ref={_rankInput}
                        placeholder="Digite uma nota para esse app"
                        selection={{
                            start: 0,
                            end: 5
                        }}
                        keyboardType="numeric"
                        returnKeyType="send"
                        onSubmitEditing={() => sendInfo()}
                    />
                    
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