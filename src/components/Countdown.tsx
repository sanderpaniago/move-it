import { useContext, useEffect, useState } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/countdown.module.scss'



export default function Countdown() {

    const {
        hasFinished,
        isActive,
        minutes,
        resetCountdown,
        seconds,
        startCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
    
    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButtom}
                >Ciclo encerrado
                <img src="icons/check-green.svg" alt="Ciclo concluido"/>
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButtom} ${styles.countdownButtomActive}`}
                            onClick={resetCountdown}
                        >Abandonar ciclo</button>
                    ): (
                        <button 
                            type="button" 
                            className={styles.countdownButtom}
                            onClick={startCountdown}
                        >Iniciar um ciclo</button>
                    )}
                </>
            )}

            


        </div>
    )
}