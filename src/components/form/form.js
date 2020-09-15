import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormStates, setFormFilled } from '../../redux/actions'
import { loadText, getStringCodeByText } from '../../operations'
import { ActivityForm, ActivityFormsList } from '../components'
import { FormControlLabel, Radio } from '@material-ui/core'

export const Form = ({ foodTypes,
    trainingActivities,
    formTypes,
    snackTypes }) => {

    const dispatch = useDispatch()
    const formStates = useSelector((state) => state.formStates.formStates)
    const [state, setState] = useState({
        breakfast: formStates.breakfastState,
        lunch: formStates.lunchState,
        dinner: formStates.dinnerState,
        snacks: formStates.snacksState,
        training: formStates.trainingState
    })
    const { breakfast, lunch, dinner, snacks, training } = state

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

    const handleChange = (event) => {
        const typeState = getStringCodeByText(event.target.name).substr(10)
        setState({ ...state, [typeState]: event.target.value });
    };

    const activityFormFactory = (formType) => {
        const stateType = formType.substr(10)
        const propsFactory = {
            'breakfast': {
                value: breakfast,
                items: foodTypes
            },
            'lunch': {
                value: lunch,
                items: foodTypes
            },
            'dinner': {
                value: dinner,
                items: foodTypes
            },
            'snacks': {
                value: snacks,
                items: snackTypes
            },
            'training': {
                value: training,
                items: trainingActivities
            }
        }

        return <ActivityForm key={`activity-${formType}`}
                {...propsFactory[stateType]} {...{ handleChange, header: loadText(formType) }}>
                {propsFactory[stateType].items.map(({ value, label }) => {
                    return <FormControlLabel {...{ value, label: loadText(label), control: (<Radio />), key: `control-${value}` }} />
                })}
            </ActivityForm>}

    return (<ActivityFormsList {...{ saveFormStates, approvalButtonCaption: loadText('button-approval-caption'), formTitle: loadText('app-form-title') }} >{formTypes.map(type => { return activityFormFactory(type) })}</ActivityFormsList>)
}