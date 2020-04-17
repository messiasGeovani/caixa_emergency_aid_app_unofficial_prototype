// register routes
import React from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated'

// screens
import Home from '../screens/Home';

const Switch = createAnimatedSwitchNavigator();

const transitions = (
    <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
    </Transition.Together>
)

function RegisterRoutes() {
    return (
        <Switch.Navigator 
            initialRouteName="Info"
            transition={transitions}
        >
          
          <Switch.Screen 
            name="Register"
            component={Home}
            options={{
              gestureDirection: 'horizontal',
              headerShown: false
            }}
          />

        </Switch.Navigator>
    );
}

export default RegisterRoutes;