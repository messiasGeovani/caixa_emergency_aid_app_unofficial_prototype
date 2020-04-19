// Alert component
import React from 'react'
// styles
import {
    ModalContainer,
    Container,
    Title,
    Description,
    Button
} from './styles'

function Alert({ info, visible, action }) {
    return (
        <ModalContainer visible={visible}>
            <Container background>

                <Container box>
                    <Title>
                        { info.title }
                    </Title>
                    <Description>
                        { info.description }
                    </Description>

                    <Button onPress={() => action()}>
                        <Description button>
                            Ok
                        </Description>
                    </Button>
                </Container>

            </Container>
        </ModalContainer>
    )
}

export default Alert