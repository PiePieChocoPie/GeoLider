import styles from "./AuthModal.module.css";
import { FcGoogle } from "react-icons/fc";
import { SiMaildotru } from "react-icons/si";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <h2>Вход в систему</h2>
          <input type="text" placeholder="Логин" className={styles.input} />
          <input type="password" placeholder="Пароль" className={styles.input} />

          <div className={styles.actions}>
            <button className={styles.confirm} onClick={onClose}>Войти</button>
            <button className={styles.cancel} onClick={onClose}>Отмена</button>
          </div>

          <h3>Забыли пароль?</h3>

          <div className={styles.altAuth}>
            <button className={styles.iconBtn} onClick={onClose}>
              <FcGoogle size={32} />
            </button>
            <button className={styles.iconBtn} onClick={onClose}>
              <SiMaildotru color="#168de2" size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
