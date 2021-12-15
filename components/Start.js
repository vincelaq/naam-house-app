import React from 'react'
import { View, Image, TextInput, StyleSheet } from 'react-native'

import Header from './Header'
import Button from './Button'
import Description from './Description'

const Start = ({ nextStep }) => {
    
    const nextForm = (e) => {
        e.preventDefault()
        nextStep()
    }
    


    return (
        <View style={styles.container} > 
            <Image source={require('../assets/logo.png')} style={styles.img} />
            <Description text="Need to report a veteran in need of assistance?" />
            <Button 
                button="Start" 
                onPressFunction={nextForm} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0B41',
        paddingTop: 160,
        paddingBottom: 100,    
    },
    img: {
        width: 400,
        height: 280,
    }
})

export default Start

