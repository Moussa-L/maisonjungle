import { useState } from "react"

import styles from '../styles/Footer.module.css'

const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    const handleInput= (e) => {
        setInputValue(e.target.value)
    }

    const handleBlur = (e) => {
        if(!inputValue.includes("@")) {
            alert("Veuillez entrer une adresse mail valide")
        }
    }
    return (
        <footer className={styles.lmjFooter}>
            <div className={styles.lmjFooterElem}>
                <p>© 2026 - La Maison Jungle🌻</p>
            </div>
            <div className={styles.lmjFooterElem}>
                <p>Contactez-nous : contact@lamaisonjungle.com</p>
            </div>
            <input 
                placeholder="votre mail" 
                value={inputValue}
                onChange={handleInput}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer;