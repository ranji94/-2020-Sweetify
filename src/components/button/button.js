import React from 'react'
import styles from './button.scss'

export const Button = ({ onClick, children }) => {
    return(<div {...{ onClick }} className={styles['button']}>
        {children}
    </div>)
}