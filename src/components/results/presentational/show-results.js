import React, { useState } from 'react'
import styles from '../results.scss'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Zoom from 'react-reveal'
import { Button } from '../../components'
import { CancelOutlined } from '@material-ui/icons'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export const ShowResults = ({ approved,
    approvedText,
    backButtonCaption,
    backButtonOnClick,
    buffsHint,
    children,
    defaultIconProps,
    disapprovedText,
    header,
    luckyText,
    showDetailsCaption,
    sweetnessChanceCaption,
    totalPercentageChance }) => {

    const [showMore, setShowMore] = useState(false)

    return (<div className={styles['content-container']}>
        <h1>{header}</h1>
        <Zoom>
            <div className={styles['total-result-icon']}>
                {
                    approved
                        ? (<div>
                            <div>
                                <CheckCircleIcon className={styles['approved-icon']} {...defaultIconProps} />
                            </div>
                            <div className={styles['approval-text']}>{approvedText}</div>
                        </div>)
                        : (<div>
                            <div>
                                <CancelOutlined className={styles['disapproved-icon']} {...defaultIconProps} />
                            </div>
                            <div className={styles['approval-text']}>{disapprovedText}</div>
                        </div>)
                }
            </div>
            {
                approved & totalPercentageChance < 20
                    ? <div className={styles['lucky-text']}>{luckyText}</div>
                    : <span />
            }
        </Zoom>
        <div onClick={() => setShowMore(showMore ? false : true)} className={styles['accordion-box']}>
            <div className={styles['accordion-container']}>
                <div className={styles['accordion-desc']}>
                    {showDetailsCaption}
                    </div>
                <div className={styles['accordion-icon']}>
                    {
                        showMore
                        ?   <KeyboardArrowDownIcon style={{ fontSize: '30px' }} />
                        :   <KeyboardArrowRightIcon style={{ fontSize: '30px' }} />
                    }
                    
                </div>
            </div>

            <div>
                <Zoom collapse when={showMore}>
                    <div>
                        <div className={styles['buffs-hint']}>{buffsHint + ':'}</div>
                        {children}
                        <div className={styles['result-field']}>
                            <div className={styles['result-item']}>
                                {sweetnessChanceCaption}
                            </div>
                        </div>
                        <div className={styles['result-field']}>
                            <div className={styles['result-item-total']}>
                                {totalPercentageChance} %
                                </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
        <div className={styles['button-container']}>
            <Button onClick={backButtonOnClick}>{backButtonCaption}</Button>
        </div>
    </div>)
}