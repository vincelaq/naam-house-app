// import { StatusBar } from 'expo-status-bar'
// import React from 'react'
// import { View, Text, StyleSheet } from 'react-native'

// import Header from './components/Header'
// import Description from './components/Description'

// const App = () => {
//   return (
//     <View style={styles.container}>
//         <Header text='Is person of interest a veteran?' />
//         <Description text='NAAM House aids veterans specifically. Try your best to find out if the person of interest is a veteran. If they won’t confirm they are, a key identifying features include clothing that might have military insignia or symbols.' />
//         <StatusBar style='auto' />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 60,
//   },
// })

// export default App

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import MainForm from './components/MainForm'

const App = () => {
  return (
    <View style={styles.container}>
        <MainForm />

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