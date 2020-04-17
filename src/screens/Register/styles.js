// info screen styles
import styled from 'styled-components/native'

// icons
import Icon from 'react-native-vector-icons/Feather'

const Container = styled.View`    
    ${({ buttons }) => buttons ? `
        margin: 0px 40px
        marginTop: 20px
    ` : ``}    

    ${({ text }) => text ? `
        flexDirection: row
        alignItems: center
        margin: 10px 20px
    ` : ``}

    ${({ form }) => form ? `
        marginTop: 20px
        marginRight: 20px
        marginLeft: 20px
    ` : ``}

    ${({ main }) => main ? `
        justifyContent: flex-end
        margin: 0
    ` : ``}

    ${({ alignCenter }) => alignCenter ? `
        alignItems: center
    ` : ``}

    ${({ input }) => input ? `
        border: 1px solid transparent
        borderBottomColor: #1D79C6
        marginBottom: 40px
    ` : ``}
`
const AppContainer = styled.KeyboardAvoidingView`
    flex: 1
`
const Title = styled.Text`
    color: #1D79C6

    ${({ label }) => label ? `
        fontSize: 15px
        marginBottom: 5px
    ` : ``}
`
const Description = styled.Text`
    margin: 0 40px
    marginBottom: 20px
    opacity: 0.5
`
const List = styled.ScrollView``
const InfoIcon = styled(Icon).attrs({
    size: 20,
    name: 'check-circle',
    color: '#F29200'
})`
    marginRight: 10px
`
const Input = styled.TextInput`
    height: 40
    border: 1px solid transparent
    borderBottomColor: #1D79C6
    marginBottom: 20px
    fontSize: 15px
`
const NameInput = styled(Input)``
const EmailInput = styled(Input)``
const CityInput = styled(Input)``
const RankInput = styled.Picker`
    height: 40
`

export {
    Container,
    Title,
    Description,
    List,
    InfoIcon,
    NameInput,
    EmailInput,
    CityInput,
    AppContainer,
    RankInput
}