import styles from './experience.module.scss'

export default function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: '50%'}} />
                <span className={styles.currentExperience} style={{left: '50%'}}>300xp</span>
            </div>
            <span>600px</span>
        </header>
    )
}