import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFormFilled } from '../../redux/actions'
import styles from './results.scss'
import { Button } from '../components'
import { loadText, getRandomBooleanWithProbability } from '../../operations'
import { CancelOutlined } from '@material-ui/icons'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Zoom from 'react-reveal'
import Slide from 'react-reveal'

const APPROVAL_ICON_SIZE = '8vw'

export const Results = ({ formTypes }) => {
    const defaultIconProps = {
        style: { fontSize: APPROVAL_ICON_SIZE }
    }

    const dispatch = useDispatch()
    const formStates = useSelector((state) => state.formStates.formStates)
    const typeToStateMap = {
        'form-type-breakfast': formStates.breakfastState,
        'form-type-lunch': formStates.lunchState,
        'form-type-dinner': formStates.dinnerState,
        'form-type-snacks': formStates.snacksState,
        'form-type-training': formStates.trainingState
    }

    const getProbability = () => {
        let probability = 0.5

        formTypes.forEach(type => {
            probability += getWeight(typeToStateMap[type])
        })

        if (probability < 0) {
            return 0
        }

        if (probability > 1) {
            return 1
        }

        return Math.round(probability * 100) / 100
    }

    return (
        <div className={styles['content-container']}>
            <h1>{loadText('header-results')}</h1>
            <Zoom>
                <div className={styles['total-result-icon']}>
                    {
                        getRandomBooleanWithProbability(getProbability())
                            ? (<div>
                                <div>
                                    <CheckCircleIcon className={styles['approved-icon']} {...defaultIconProps} />
                                </div>
                                <div className={styles['approval-text']}>{loadText('approved-text')}</div>
                            </div>)
                            : (<div>
                                <div>
                                    <CancelOutlined className={styles['disapproved-icon']} {...defaultIconProps} />
                                </div>
                                <div className={styles['approval-text']}>{loadText('disapproved-text')}</div>
                            </div>)
                    }
                </div>
            </Zoom>
            {formTypes.map(type => {
                return <Slide bottom>
                    <SingleResult result={typeToStateMap[type]}>
                        {loadText(type)}
                    </SingleResult>
                </Slide>
            })}
            <Slide bottom>
            <div className={styles['result-field']}>
                <div className={styles['result-item']}>
                    {loadText('sweetness-chance-caption') + ':'}
                </div>
            </div>
            <div className={styles['result-field']}>
                <div className={styles['result-item-total']}>
                    {Math.round(getProbability() * 100)} %
                </div>
            </div>
            </Slide>

            <div className={styles['button-container']}>
                <Button onClick={() => dispatch(setFormFilled(false))}>{loadText('button-fill-again')}</Button>
            </div>
        </div>
    )
}

const SingleResult = ({ result, children }) => {
    return <div>
        <div className={styles['result-field']}>
            <div className={styles['result-item']}>
                {children}
            </div>
        </div>
        <div className={styles['result-field']}>
            <div className={styles['result-item-calculations']}>
                {
                    getWeight(result) <= 0
                        ? <span className={styles['text-red']}>{getWeight(result) * 100 + '% ' + loadText('result-chance')}</span>
                        : <span className={styles['text-green']}>+{getWeight(result) * 100 + '% ' + loadText('result-chance')}</span>
                }
            </div>
        </div>
    </div>
}

const getWeight = (result) => {
    const weightsMap = {
        'none': 0,
        'fit': 0.1,
        'unhealthy-salty': -0.1,
        'unhealthy-sweet': -0.15,
        'unhealthy-mix': -0.15,
        'gym': 0.15,
        'running': 0.2,
        'bike': 0.1
    }

    return weightsMap[result]
}