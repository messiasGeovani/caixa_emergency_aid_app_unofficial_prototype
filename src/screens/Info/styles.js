// info screen styles
import styled from 'styled-components/native'

// global styles
import metrics from '../../config/metrics'

// icons
import Icon from 'react-native-vector-icons/Feather'

const Container = styled.View`
    ${({ buttons }) => buttons ? `
        margin: 0px 40px
    ` : ``}    

    ${({ text }) => text ? `
        flexDirection: row
        alignItems: center
        margin: 10px 20px
    ` : ``}

    ${({ main }) => main ? `
        marginTop: 20px 
    ` : ``}
`
const Title = styled.Text`
    fontWeight: bold
    color: #1D79C6
`
const Description = styled.Text`
    margin: 0 40px
    marginBottom: 20px
    opacity: 0.5
`
const List = styled.ScrollView`
    height: 65%
`
const InfoIcon = styled(Icon).attrs({
    size: 20,
    name: 'check-circle',
    color: '#F29200'
})`
    marginRight: 10px
`

export {
    Container,
    Title,
    Description,
    List,
    InfoIcon
}