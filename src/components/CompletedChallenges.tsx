import styles from '../styles/components/completedChallenges.module.scss'

export default function CompletedChallenges(){
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}