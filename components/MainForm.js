import React, { useState } from 'react'
import { View } from 'react-native'
import * as Location from 'expo-location';

import Start from './Start'
import VetConfirm from './VetConfirm'
import VetForm from './VetForm'
import BehavForm from './BehavForm'
import ImageForm from './ImageForm'
import ResForm from './ResForm'
import Confirm from './Confirm'
import Success from './Success'

const API_URL = 'https://naam-server.herokuapp.com/api'

const MainForm = () => {
    const [state, setState] = useState({
        step: 1,
        vetName: "",
        curLocation: "",
        freqLocation: "",
        ping: "",
        behavior: "",
        resName: "",
        resContact: "",
    })
    
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState('')
    const [errorMsg, setErrorMsg] = useState(null);

    // Proceed to next step
    const nextStep = () => {
      
        setState(prevState => ({
          ...prevState,
          step: prevState.step+1
        }))


    }

    // Back to previous step
    const prevStep = () => {
      setState(prevState => ({
        ...prevState,
        step: prevState.step-1
      }))
    }
    
    // Start over
    const startOver = () => {
      setState(prevState => ({
        ...prevState,
        step: 1,
        vetName: "",
        curLocation: "",
        freqLocation: "",
        ping: "",
        behavior: "",
        resName: "",
        resContact: "",
      }))
  }

    // Handle fields change
    const handleChange = input => (e) => {
        setState({
            ...state,
            [input] : e.nativeEvent.text
        })
        console.log(state)
    }

    // Handle location ping
    const handlePing = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setState(prevState => ({
        ...prevState,
        ping: JSON.stringify(location)
      }))

    }

    const { step, vetName, curLocation, freqLocation, ping, behavior, resName, resContact } = state 
    const values = { vetName, curLocation, freqLocation, ping, behavior, resName, resContact }

    const handleSubmit = () => {
      const payload = {
        "vetName": vetName, 
        "curLocation": curLocation,
        "freqLocation": freqLocation, 
        "ping": ping, 
        "behavior": behavior, 
        "resName": resName, 
        "resContact": resContact
      }
      fetch(`${API_URL}/form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then(async res => {
        try {
          const jsonRes = await res.json()
          if (res.status !== 200) {
            setIsError(true)
            setMessage(jsonRes.message)
          } else {
            setIsError(false)
            setMessage(jsonRes.message)
          }
        } catch (err) {
          console.log(err)
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
    
    const getMessage = () => {
      const status = isError ? `Error: ` : `Success: `;
      return status + message;
    }

    switch (step) {
        case 1:
          return (
            <Start
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <VetConfirm
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          );  
        case 3:
          return (
            <VetForm
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              handlePing={handlePing}
              errorMsg={errorMsg}
              values={values}
            />
          );
        case 4:
          return (
            <BehavForm
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          );
        // case 5:
        //   return (
        //     <ImageForm
        //       nextStep={nextStep}
        //       prevStep={prevStep}
        //       handleChange={handleChange}
        //       values={values}
        //     />
        //   );
        case 5:
          return (
            <ResForm
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              values={values}
            />
          );
        case 6:
          return (
            <Success 
              startOver={startOver}
            />
          );
        default:
          (console.log('This is a multi-step form built with React.'))
      }
}

export default MainForm
