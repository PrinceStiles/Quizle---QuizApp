import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/index';
import Quizlet from '../screens/quizlet';
import Results from '../screens/results';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Quizlet" component={Quizlet} options={{headerShown: false}}/>
      <Stack.Screen name="Results" component={Results} options={{headerShown: false}}/>
      
    </Stack.Navigator>
  );
}

export default MyStack;