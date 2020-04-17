//  Loading component
import React from 'react'
// styles
import {
    ModalContainer,
    Container,
    Title,
    LoadingIcon
} from './styles'

function Loading({ visible }) {
    return (
        <ModalContainer visible={visible}>
            <Container background>

                <Container box>
                    <LoadingIcon />
                    <Title>
                        Carregando...
                    </Title>
                </Container>

            </Container>
        </ModalContainer>
    )
}

export default Loading