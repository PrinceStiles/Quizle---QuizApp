import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Home from './screens/index'
// import Quizlet from './screens/quizlet'
// import Results from './screens/results'
import MyStack from './navigator/index'

const App = () => {
  return (
    
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  }
})