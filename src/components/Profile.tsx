import styles from '../styles/components/profile.module.scss'

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/sanderpaniago.png" alt="Sander Paniago"/>
            <div>
                <strong>Sander Paniago</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}