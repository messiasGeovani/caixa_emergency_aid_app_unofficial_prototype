// button component
import React from 'react'
// styles
import {
    Btn,
    Description
} from './styles'

function Button({ type, title, action }) {
    return (
        <Btn type={type} onPress={() => action()}>
            <Description type={type}>
                { title }
            </Description>
        </Btn>
    )
}

export default Button