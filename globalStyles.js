// global styles
import styled from 'styled-components/native'

// metrics
import metrics from './src/config/metrics'

const AppContainer = styled.View`
    height: 100%
    padding-top: ${metrics.top}
`

export {
    AppContainer
}