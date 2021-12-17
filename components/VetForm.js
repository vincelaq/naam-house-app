import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import Header from './Header'
import Button from './Button'

const VetForm = ({ nextStep, prevStep, handleChange, handlePing, errorMsg, values }) => {
    
    const nextForm = (e) => {
        e.preventDefault()
        nextStep()
    }
    

    // Location shared message
    let text = 'Share your current location';
    if (errorMsg) {
      text = errorMsg;
    } else if (values.ping) {
      text = "Location shared!";
    }

    return (
        <View style={styles.container}>
            <Header prevStep={prevStep} text="Veteran Info" />
            <TextInput
                placeholder='Name' 
                onChange={handleChange('vetName')} 
                value={values.vetName}
                style={styles.input} 

            />
            <TextInput
                placeholder='Current Location' 
                onChange={handleChange('curLocation')} 
                value={values.curLocation}
                style={styles.input}  
            />
            <TextInput
                placeholder='Frequented Location' 
                onChange={handleChange('freqLocation')} 
                value={values.freqLocation} 
                style={styles.input} 
            />
            <View style={styles.button}>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={handlePing}
                >
                    <Text style={styles.btnText}>
                        {text}
                    </Text>
                </TouchableOpacity>
            </View>
            <Button button="Next" onPressFunction={nextForm} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60
    },
    input: {
        height: 60,
        padding: 16,
        fontSize: 16,
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 16, 
        
    },
    button: {
       marginHorizontal: 20,
    },
    btn: {
        backgroundColor: '#E8E8E8',
        paddingVertical: 16,
        paddingHorizontal: 10,
        marginVertical: 16,
        borderRadius: 50,
    },
    btnText: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Inter_600SemiBold',
    },
})

export default VetForm
