// header styles
import styled from 'styled-components/native'

// metrics
import metrics from '../../config/metrics'

// header logo
import headerLogo from '../../../assets/headerLogo.png'

const Container = styled.View`
    alignItems: center
    paddingTop: ${metrics.top}
    paddingBottom: 20px
    backgroundColor: #1D79C6
`
const Title = styled.Text`
    color: white
    fontWeight: bold
    fontSize: 17px
    margin: 30px 0
`
const Description = styled.Text`
    color: white
    textAlign: center
    margin: 20px 40px
    marginTop: 0
`
const HeaderLogo = styled.Image.attrs({
    source: headerLogo
})`
    marginTop: 20px
`

export {
    Container,
    Title,
    Description,
    HeaderLogo
}