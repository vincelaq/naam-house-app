import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'

import Header from './Header'
import Button from './Button'
import Description from './Description'

const Success = ({ startOver }) => {
    
    


    return (
        <View style={styles.container} >
            <View style={styles.box}>
                <Text style={styles.text}>Success!</Text>
                <Description text="Thank you for your submission and helping NAAM House care for veterans in their time of need. If you need to contact NAAM House directly please contact (555) 555-5555." />
                <View style={styles.button}>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={startOver}
                    >
                        <Text style={styles.btnText}>
                            Start Over
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>{Linking.openURL('tel:15555555555');}}
                    >
                        <Text style={styles.call}>
                            Call NAAM House
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0B41',
        paddingTop: 428,
        paddingBottom: 428,    
    },
    box : {
            
        backgroundColor: 'white',
        width: 336,
        height: 420,
        borderRadius: 25,
        paddingVertical: 36,
        paddingHorizontal: 12,
        alignItems: 'center'
    },
    text: {
        color: '#000',
        fontFamily: 'Inter_600SemiBold',
        fontSize: 30,
        alignItems: 'center',

    },
    button: {
        height: 280,
        padding: 12,
    },
    btn: {
        backgroundColor: '#5DB075',
        paddingVertical: 16,
        paddingHorizontal: 88,
        marginVertical: 16,
        borderRadius: 50,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Inter_600SemiBold',
    },
    call: {
        color: '#5DB075',
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    }
})

export default Success