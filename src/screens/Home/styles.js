//  home screen styles
import styled from 'styled-components/native'

// metrics
import metrics from '../../config/metrics'

// assets
import bg from '../../../assets/bg.png'
import logos from '../../../assets/logos.png'

const Container = styled.View`
    ${({ main }) => main ? `
        marginTop: ${metrics.top}
    ` : ``}

    ${({ text }) => text ? `
        alignItems: flex-start
        marginLeft: 20px
        marginTop: 35%
    ` : ``}

    ${({ logo }) => logo ? `
        margin: 30px 10px
        height: 20%
    ` : ``}

    ${({ buttons }) => buttons ? `
        margin: 20px 40px
        marginTop: 40%
    ` : ``}
`
const Title = styled.Text`
    color: white

    ${({ main }) => main ? `
        fontWeight: normal
        fontSize: 30px
    ` : ``}

    ${({ sub }) => sub ? `
        fontWeight: 100
        fontSize: 22px
        marginTop: 5px
    ` : ``}
`
const Description = styled.Text`
    color: white

    ${({ title }) => title ? `
        fontSize: 17px
        marginBottom: 20px
    ` : ``}

    ${({ registerButton }) => registerButton ? `
        fontSize: 16px
    ` : ``}

    ${({ statusButton }) => statusButton ? `
        fontSize: 16px
        color: #014682
    ` : ``}
`
const Background = styled.Image.attrs({
    source: bg
})`
    position: absolute
    height: 100%
`
const Logos = styled.Image.attrs({
    source: logos
})`
    margin: 30px 10px
`
const Button = styled.TouchableOpacity`
    padding: 13px 20px
    borderRadius: 5px
    marginBottom: 20px
    elevation: 5
    alignItems: center

    ${({ register }) => register ? `
        backgroundColor: #F29200
    ` : ``}

    ${({ status }) => status ? `
        backgroundColor: rgba(255, 255, 255, 0.6)
    ` : ``}
`

export {
    Container,
    Title,
    Description,
    Background,
    Logos,
    Button
}