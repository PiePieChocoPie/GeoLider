import { useState } from "react"
import styles from "./Header.module.css"
import PlanetaLogo from "../../components/PlanetaLogo/PlanetaLogo"
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store";
import { setLanguage } from "../../../store/langSlice";
import translations from "../../i18n";
import { AuthModal } from "../../components/auth/AuthModal";

export default function Header() {
  const language = useSelector((state: RootState) => state.language.current);
  const dispatch = useDispatch();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <div className={styles.logo}>
          <PlanetaLogo />
        </div>
        <h1 className={styles.nameCompany}>
          <span className={styles.mainName}>{translations[language].companyName}</span>
          <span className={styles.subName}>{translations[language].companyGroup}</span>
        </h1>
      </div>

      <div className={styles.rightGroup}>
        <div className={styles.languageList}>
          <button
            className={language === "ru" ? "active" : ""}
            onClick={() => dispatch(setLanguage("ru"))}
          >
            RU
          </button>
          <button
            className={language === "en" ? "active" : ""}
            onClick={() => dispatch(setLanguage("en"))}
          >
            EN
          </button>
        </div>

        <div className={styles.authButtons}>
          <button onClick={() => setIsAuthOpen(true)}>{translations[language].login}</button>
          <button>{translations[language].register}</button>
        </div>
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </header>
  )
}
