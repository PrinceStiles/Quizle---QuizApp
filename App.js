import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/index'
import Quizlet from './screens/quizlet'
import Results from './screens/results'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Quizlet /> */}
      <Results />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  }
})