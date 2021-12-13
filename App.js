import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header'

const App = () => {
  return (
    <View style={styles.container}>
        <Header text='Is person of interest a veteran?' />
        <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
})

export default App