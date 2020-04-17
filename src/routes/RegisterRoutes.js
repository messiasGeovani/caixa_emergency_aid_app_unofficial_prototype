// Register routes config
import React from 'react'

//  react navigation config
import { createAppContainer } from 'react-navigation'

// react switch navigation config
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { Transition } from 'react-native-reanimated'

// components
import Info from '../screens/Info'
import Register from '../screens/Register'

// navigation routes config
const registerNavigation = createAnimatedSwitchNavigator(
    {
        InfoScreen: Info,
        RegisterScreen: Register,
    },
    {
        initialRouteName: 'InfoScreen',
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="fade"
                    durationMs={200}
                    interpolation="easeIn"
                />
                <Transition.In 
                    type="fade"
                    durationMs={300}
                />
            </Transition.Together>
        )
    }
)

const RegisterRoutes = createAppContainer(registerNavigation)

export default RegisterRoutes