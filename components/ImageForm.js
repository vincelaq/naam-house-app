import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import Header from './Header'
import Button from './Button'
import Description from './Description'

const ImageForm = ({ nextStep, handleChange, values }) => {
    
    const nextForm = (e) => {
        e.preventDefault()
        nextStep()
    }
    


    return (
        <View>
            <Header text="Images" />
            <Description text="Upload any photos or videos that might help us locate person of interest" />
            <TextInput
                placeholder='Add Images' 
                onChange={handleChange('vetName')} 
                value={values.vetName}
                style={styles.input} 

            />
            <Text style={styles.item}> _ image.jpg</Text>
            <Text style={styles.item}> _ image2.jpg</Text>
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
        borderRadius: 50,
        marginVertical: 8,
        marginHorizontal: 16, 
        
    },
    item: {
        height: 48,
        padding: 20,
        fontSize: 24,
    }
})

export default ImageForm
