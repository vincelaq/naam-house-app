import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import Header from './Header'
import Description from './Description'
import Button from './Button'

const BehavForm = ({ nextStep, prevStep, handleChange, values }) => {
    
    const nextForm = (e) => {
        e.preventDefault()
        nextStep()
    }
    


    return (
        <View style={styles.container}>
            <Header prevStep={prevStep} text="Behavior" />
            <Description text="What is the current state of the person of interest?" />
            <TextInput
                multiline={true}
                numberOfLines={5}
                placeholder='Describe current behavior' 
                onChange={handleChange('behavior')} 
                value={values.behavior} 
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
        height: 125,
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

export default BehavForm