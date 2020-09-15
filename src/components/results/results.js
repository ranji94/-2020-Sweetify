import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormFilled } from '../../redux/actions'
import { loadText, getRandomBooleanWithProbability } from '../../operations'
import { activityTypeWeights, approvalIconSize, initialProbability } from '../../constants'
import { SingleResult } from '../components'
import Slide from 'react-reveal'
import { ShowResults } from './presentational/show-results'

export const Results = ({ formTypes }) => {
    const dispatch = useDispatch()
    const formStates = useSelector((state) => state.formStates.formStates)

    const typeToStateMap = {
        'form-type-breakfast': formStates.breakfastState,
        'form-type-lunch': formStates.lunchState,
        'form-type-dinner': formStates.dinnerState,
        'form-type-snacks': formStates.snacksState,
        'form-type-training': formStates.trainingState
    }

    const defaultIconProps = {
        style: { fontSize: approvalIconSize }
    }

    const getProbability = () => {
        let probability = initialProbability

        formTypes.forEach(type => {
            probability += activityTypeWeights[typeToStateMap[type]]
        })

        if (probability < 0) {
            return 0
        }

        if (probability > 1) {
            return 1
        }

        return Math.round(probability * 100) / 100
    }

    return (<ShowResults {...{
        approved: getRandomBooleanWithProbability(getProbability()),
        approvedText: loadText('approved-text'),
        backButtonCaption: loadText('button-fill-again'),
        backButtonOnClick: () => dispatch(setFormFilled(false)),
        buffsHint: loadText('initial-probability', initialProbability * 100 + '%'),
        defaultIconProps,
        disapprovedText: loadText('disapproved-text'),
        header: loadText('header-results'),
        luckyText: loadText('lucky-approval'),
        showDetailsCaption: loadText('show-details-caption'),
        sweetnessChanceCaption: loadText('sweetness-chance-caption') + ':',
        totalPercentageChance: Math.round(getProbability() * 100)
    }}>
        {formTypes.map(type => {
            return <SingleResult key={`single-result-${type}`} {...{ activityTypeWeights, result: typeToStateMap[type], resultChanceCaption: loadText('result-chance') }} >
                {loadText(type)}
            </SingleResult>
        })}
    </ShowResults>)
}