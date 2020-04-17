// home routes
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'

// main navigator context
import { 
  MainNavigatorContext,
  MainNavigatorProvider
} from '../config/contexts'

// screens
import Home from '../screens/Home';
import RegisterRoutes from './RegisterRoutes'

const Stack = createStackNavigator();

const RegisterRoutesConfig = ({navigation}) => {
  const navigationContext = useContext(MainNavigatorContext)

  return (
    <MainNavigatorProvider value={{
      goToHomeScreen: () => navigation.pop()
    }}>
      <RegisterRoutes />
    </MainNavigatorProvider>
  )
}

function MainRoutes() {
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
          <Stack.Screen 
            name="Register"
            component={RegisterRoutesConfig}
            options={{
              gestureDirection: 'horizontal',
              headerShown: false
            }}
          />

        </Stack.Navigator>
    );
}

export default MainRoutes;