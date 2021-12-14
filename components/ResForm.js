import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import Header from './Header'
import Button from './Button'
import Description from './Description'

const ResForm = ({ nextStep, handleChange, values }) => {
    
    const nextForm = (e) => {
        e.preventDefault()
        nextStep()
    }
    


    return (
        <View>
            <Header text="Responder Info" />
            <Description text="Enter your contact information just in case we need to reach you for more information" />
            <TextInput
                placeholder='Name' 
                onChange={handleChange('resName')} 
                value={values.resName}
                style={styles.input} 

            />
            <TextInput
                placeholder='Phone or Email' 
                onChange={handleChange('resContact')} 
                value={values.resContact}
                style={styles.input}  
            />
            <Button button="Next" onPressFunction={nextForm} />
        </View>
    )
}

const styles = StyleSheet.create({
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

export default ResForm
