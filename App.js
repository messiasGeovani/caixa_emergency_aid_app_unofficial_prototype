import 'react-native-gesture-handler';

import React from 'react';

// navigation config
import { NavigationContainer } from '@react-navigation/native'

// routes
import MainRoutes from './src/routes/MainRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}
