// Alert styles
import styled from 'styled-components/native'

const ModalContainer = styled.Modal.attrs({
    animationType: 'fade',
    transparent: true
})`
    height: 100%
    alignItems: center
    justifyContent: center
`
const Container = styled.View`
    ${({ box }) => box ? `
        padding: 40px 40px
        margin: 0 20px
        paddingBottom: 30
        borderRadius: 10px
        backgroundColor: white
        alignItems: center
        justifyContent: center
    ` : ``}

    ${({ background }) => background ? `
        height: 100%
        backgroundColor: rgba(0, 0, 0, 0.8)
        alignItems: center
        justifyContent: center
    ` : ``}
`
const Title = styled.Text`
    fontSize: 20px
    alignSelf: flex-start
    marginTop: 10px
    marginBottom: 20px
    color: #1D79C6
`
const Description = styled.Text`
    fontSize: 16px
    opacity: 0.8
    ${({ button }) => button ? `
        opacity: 1
        color: #1D79C6
    ` : ``}
`
const Button = styled.TouchableOpacity.attrs({
    hitSlop: {
        top: 20,
        bottom: 20,
        right: 50,
        left: 50
    }
})`
    alignSelf: flex-end
    marginTop: 20px
`

export {
    Container,
    Title,
    Description,
    ModalContainer,
    Button
}