import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter'

const Button = ({ button }) => {
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_400Regular
    });
    

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.button}>
                <TouchableOpacity 
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>
                        {button}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 280,
        padding: 15,
    },
    btn: {
        backgroundColor: '#5DB075',
        padding: 9,
        margin: 5,
        borderRadius: 50,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Inter_600SemiBold',
    },
})

export default Button