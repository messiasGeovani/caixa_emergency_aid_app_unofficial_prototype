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
    margin: 30px 0
    marginLeft: 20px
`

export {
    Container,
    Title,
    Description,
    Background,
    Logos,
}