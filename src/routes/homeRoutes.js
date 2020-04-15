// home routes
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Home from '../screens/Home';

const Stack = createStackNavigator();

function HomeRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home">
          
          <Stack.Screen 
            name="Home"
            component={Home}
            options={{
              gestureDirection: 'horizontal',
              headerShown: false
            }}
          />

        </Stack.Navigator>
    );
}

export default HomeRoutes;