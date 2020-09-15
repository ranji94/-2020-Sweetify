import React from 'react'
import styles from '../form.scss'
import { FormControl, RadioGroup } from '@material-ui/core'

export const ActivityForm = ({ header, value, handleChange, children }) => {
    return (<div className={styles['form-container']}>
        <div className={styles['form-item']}>
            <div className={styles['header']}>
                {header}
            </div>
            <FormControl component="fieldset">
                <RadioGroup aria-label={header} name={header} value={value} onChange={handleChange}>
                    {children}
                </RadioGroup>
            </FormControl>
        </div>
    </div>)
}