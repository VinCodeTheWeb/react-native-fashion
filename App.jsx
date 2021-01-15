import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home/home.component';

const AuthStack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name='/' component={Home} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;