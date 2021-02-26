import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import styles from '../styles/components/footer.module.scss'

export default function Footer() {

    const {switchActive, handleThema} = useContext(ThemeContext)

    const colorBackground = switchActive ? '#FFF' : '#000'

    return (
        <footer className={styles.footer}>
            <div className={styles.switch} style={{background: `${colorBackground}` }}>
                <label htmlFor="switch" >
                    <input 
                        type="checkbox"
                        id="switch" 
                        checked={switchActive}
                        onChange= {handleThema}
                    />
                    <span></span>
                </label>

            </div>
        </footer>
    )
}