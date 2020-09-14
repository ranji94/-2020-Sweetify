import React from 'react'
import styles from './footer.scss'

export const Footer = () => {
    return (<div className={styles['footer-container']}>
        <div className={styles['footer-item']}>
            Jędrzej Miłosz Piasecki @2020 | <a href={'https://portfolio.ranji94.vercel.app'} target={'_blank'}>authors portfolio link</a>
        </div>
    </div>)
}