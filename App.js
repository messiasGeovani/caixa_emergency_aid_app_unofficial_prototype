import 'react-native-gesture-handler';

import React from 'react';

// navigation config
import { NavigationContainer } from '@react-navigation/native'

// global styles
import {
  AppContainer
} from './globalStyles'

// routes
import HomeRoutes from './src/routes/homeRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <HomeRoutes />
    </NavigationContainer>
  );
}
