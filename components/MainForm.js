import React, { useState } from 'react'
import { View } from 'react-native'

import VetForm from './VetForm'
import BehavForm from './BehavForm'
import ImageForm from './ImageForm'
import ResForm from './ResForm'
import Confirm from './Confirm'
import Success from './Success'

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
    const [step, setStep] = useState(1)

    // Proceed to next step
    const nextStep = () => {
        setStep(step+1)
    }

    // Back to previous step
    const prevStep = () => {
        setStep(step-1)
    }
    
    // Handle fields change
    const handleChange = input => (e) => {
        setState({
            ...state,
            [input] : e.target.value
        })
    }

    const { vetName, curLocation, freqLocation, ping, behavior, resName, resContact } = state 
    const values = { vetName, curLocation, freqLocation, ping, behavior, resName, resContact }

    
    switch (step) {
        case 1:
          return (
            <VetForm
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <BehavForm
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          );
        case 3:
          return (
            <ImageForm
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          );
        case 4:
          return (
            <ResForm
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              values={values}
            />
          );
        case 5:
          return (
            <Confirm
              nextStep={nextStep}
              prevStep={prevStep}
              values={values}
            />
          );
        case 6:
          return <Success />;
        default:
          (console.log('This is a multi-step form built with React.'))
      }
}

export default MainForm
