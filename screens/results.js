import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Results = () => {
  return (
    <View>
      <View>
        <Text>Results</Text>
      </View>

      <View style={styles.bannerContainer}>
        <Image source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png'}} style={styles.banner} resizeMode='contain' />
      </View>

      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})