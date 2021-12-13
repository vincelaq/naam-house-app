import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter'

import Button from './Button'

const Description = ({ text }) => {
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_400Regular
    });
    

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.description}>
                <Text style={styles.text}>{text}</Text>
                <Button button="Yes" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        height: 280,
        padding: 15,
    },
    text: {
        color: '#666',
        fontFamily: 'Inter_400Regular',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Description