import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, this my first react native project haha.</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 40,
  }
})