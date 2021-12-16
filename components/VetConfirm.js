import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import Header from './Header'
import Button from './Button'
import Description from './Description'

const VetConfirm = ({ nextStep, prevStep }) => {
    
    const nextForm = (e) => {
        e.preventDefault()
        nextStep()
    }
    


    return (
        <View style={styles.container}>
            <Header prevStep={prevStep} text="Is person of interest a veteran?" />
            <Description text="NAAM House aids veterans specifically. Try your best to find out if the person of interest is a veteran. If they won’t confirm they are, a key identifying features include clothing that might have military insignia or symbols." />
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

export default VetConfirm