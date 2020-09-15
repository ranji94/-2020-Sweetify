import React from 'react'
import styles from '../results.scss'

export const SingleResult = ({ result, children, activityTypeWeights, resultChanceCaption }) => {
    if (activityTypeWeights[result] === 0) {
        return <span />
    }

    return <div>
        <div className={styles['result-field']}>
            <div className={styles['result-item']}>
                {children}
            </div>
        </div>
        <div className={styles['result-field']}>
            <div className={styles['result-item-calculations']}>
                {
                    activityTypeWeights[result] <= 0
                        ? <span className={styles['text-red']}>{activityTypeWeights[result] * 100 + '% ' + resultChanceCaption} </span>
                        : <span className={styles['text-green']}>+{activityTypeWeights[result] * 100 + '% ' + resultChanceCaption}</span>
                }
            </div>
        </div>
    </div>
}