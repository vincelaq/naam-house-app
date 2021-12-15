import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter'

const Button = ({ button, onPressFunction }) => {
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
                    onPress={onPressFunction}
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
        padding: 12,
    },
    btn: {
        backgroundColor: '#5DB075',
        paddingVertical: 16,
        paddingHorizontal: 160,
        marginVertical: 16,
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