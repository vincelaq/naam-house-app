import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter'

const Header = ({ text, prevStep }) => {
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });
    
    const previousForm = (e) => {
        e.preventDefault()
        prevStep()
    }

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.header}>
                <View style={styles.back}>
                    <TouchableOpacity onPress={previousForm}>
                        <Text style={styles.backtext}>Back</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.fill}>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 120,
        paddingVertical: 15,
        justifyContent: 'center',    
    },
    back: {
        width: 40,
        paddingTop: 10,
    },
    backtext: {
        fontSize: 16,
        color: '#5DB075'
    },
    fill: {

        width: 40,
    },
    text: {
        color: '#000',
        fontFamily: 'Inter_600SemiBold',
        fontSize: 30,
        textAlign: 'center',
        width: 280,
    }
})

export default Header
