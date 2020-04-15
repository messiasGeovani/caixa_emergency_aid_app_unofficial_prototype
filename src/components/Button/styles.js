// button styles
import styled from 'styled-components/native'

const Description = styled.Text`
    color: white

    ${({ type }) => type === 'primary' ? `
        fontSize: 16px
    ` : ``}

    ${({ type }) => type === 'secondary' ? `
        fontSize: 16px
        color: #014682
    ` : ``}

    ${({ type }) => type === 'back' ? `
        fontSize: 16px
        color: #F29200
    ` : ``}
`
const Btn = styled.TouchableOpacity`
    padding: 13px 20px
    borderRadius: 5px
    marginBottom: 20px
    elevation: 5
    alignItems: center

    ${({ type }) => type === 'primary' ? `
        backgroundColor: #F29200
    ` : ``}

    ${({ type }) => type === 'secondary' ? `
        backgroundColor: rgba(255, 255, 255, 0.6)
    ` : ``}

    ${({ type }) => type === 'back' ? `
        padding: 20px 20px
        backgroundColor: transparent
        elevation: 0
    ` : ``}
`

export {
    Description,
    Btn
}