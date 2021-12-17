import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import Header from './Header'
import Button from './Button'

const VetForm = ({ nextStep, prevStep, handleChange, values }) => {
    
    const nextForm = (e) => {
        e.preventDefault()
        nextStep()
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
            <TextInput
                placeholder='Share Your Location' 
                onChange={handleChange('ping')} 
                value={values.ping} 
                style={styles.input} 
            />
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
        
    }
})

export default VetForm
