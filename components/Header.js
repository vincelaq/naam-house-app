import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter'

const Header = ({ text }) => {
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });
    

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>{text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        padding: 15,    
    },
    text: {
        color: '#000',
        fontFamily: 'Inter_600SemiBold',
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Header
