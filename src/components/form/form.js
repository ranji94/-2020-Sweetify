import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormStates, setFormFilled } from '../../redux/actions'
import styles from './form.scss'
import {
    FormControlLabel,
    FormControl,
    RadioGroup,
    Radio
} from '@material-ui/core'
import { loadText } from '../../operations'
import { Button } from '../components'
import Flip from 'react-reveal'
import Fade from 'react-reveal'

export const Form = ({ foodTypes, trainingActivities, formTypes }) => {
    const dispatch = useDispatch()
    const formStates = useSelector((state) => state.formStates.formStates)

    const [breakfast, setBreakfast] = useState(formStates.breakfastState)
    const [lunch, setLunch] = useState(formStates.lunchState)
    const [dinner, setDinner] = useState(formStates.dinnerState)
    const [snacks, setSnacks] = useState(formStates.snacksState)
    const [training, setTraining] = useState(formStates.trainingState)

    const saveFormStates = () => {
        dispatch(setFormStates({
            breakfastState: breakfast,
            lunchState: lunch,
            dinnerState: dinner,
            snacksState: snacks,
            trainingState: training
        }))
        dispatch(setFormFilled(true))
    }

    const handleBreakfastChange = (event) => {
        setBreakfast(event.target.value);
    }

    const handleLunchChange = (event) => {
        setLunch(event.target.value);
    }

    const handleDinnerChange = (event) => {
        setDinner(event.target.value);
    }

    const handleSnacksChange = (event) => {
        setSnacks(event.target.value);
    }

    const handleTrainingChange = (event) => {
        setTraining(event.target.value);
    }

    const activityFormFactory = (formType) => {
        const propsFactory = {
            'form-type-breakfast': {
                value: breakfast,
                handle: handleBreakfastChange,
                items: foodTypes
            },
            'form-type-lunch': {
                value: lunch,
                handle: handleLunchChange,
                items: foodTypes
            },
            'form-type-dinner': {
                value: dinner,
                handle: handleDinnerChange,
                items: foodTypes
            },
            'form-type-snacks': {
                value: snacks,
                handle: handleSnacksChange,
                items: [...foodTypes, { value: 'unhealthy-mix', label: loadText('food-type-unhealthy-mix') }]
            },
            'form-type-training': {
                value: training,
                handle: handleTrainingChange,
                items: trainingActivities
            }
        }

        return <Flip bottom><ActivityForm header={loadText(formType)} {...propsFactory[formType]} /></Flip>
    }

    return (<div className={styles['content-container']}>
        <h1>Formularz</h1>
            {formTypes.map(type => { return activityFormFactory(type) })}
        <Fade>
        <div className={styles['button-container']}>
            <Button onClick={saveFormStates} >{loadText('button-approval-caption')}</Button>
        </div>
        </Fade>
    </div>)
}

const ActivityForm = ({ header, value, handle, items }) => {
    const labels = []

    items.map(({ value, label }) => {
        labels.push(<FormControlLabel {...{ value, label, control: (<Radio />), key: `control-${value}` }} />)
    })

    return (<div className={styles['form-container']}>
        <div className={styles['form-item']}>
            <div className={styles['header']}>
                {header}
            </div>
            <FormControl component="fieldset">
                <RadioGroup aria-label={header} name={header} value={value} onChange={handle}>
                    {labels}
                </RadioGroup>
            </FormControl>
        </div>
    </div>)
}