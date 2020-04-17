// loading styles
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
        height: 200px
        width: 200px
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
    fontSize: 15px
    marginTop: 10px
`
const Description = styled.Text``
const LoadingIcon = styled.ActivityIndicator.attrs({
    size: 'large',
    color: '#1D79C6'
})``

export {
    Container,
    Title,
    Description,
    LoadingIcon,
    ModalContainer
}