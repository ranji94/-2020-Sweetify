import React from 'react'
import styles from '../form.scss'
import Fade from 'react-reveal'
import { Button } from '../../components'

export const ActivityFormsList = ({ children,
    saveFormStates,
    approvalButtonCaption,
    formTitle }) => {
    return(<div className={styles['content-container']}>
        <h1>{formTitle}</h1>
        {children}
        <Fade>
            <div className={styles['button-container']}>
                <Button onClick={saveFormStates} >{approvalButtonCaption}</Button>
            </div>
        </Fade>
    </div>)
}