import { useState } from "react"
import styles from "./Header.module.css"
import PlanetaLogo from "../../components/PlanetaLogo/PlanetaLogo"
export default function Header() {
  const [language, setLanguage] = useState("ru")

  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <div className={styles.logo}>
          <PlanetaLogo />
        </div>
        <h1 className={styles.nameCompany}>
          <span className={styles.mainName}>Геолидер</span>
          <span className={styles.subName}>Группа компаний</span>
        </h1>
      </div>
      <div className={styles.rightGroup}>
        <div className={styles.languageList}>
          <button
            className={language === "ru" ? styles.activeLang : ""}
            onClick={() => setLanguage("ru")}
          >
            RU
          </button>
          <button
            className={language === "en" ? styles.activeLang : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>

        <div className={styles.authButtons}>
          <button>Вход</button>
          <button>Регистрация</button>
        </div>
      </div>
    </header>
  )
}
