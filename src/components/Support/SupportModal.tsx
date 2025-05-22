// components/SupportModal.tsx
import styles from "./SupportModal.module.css"

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Связаться с нами</h2>
        <p>Вы можете отправить запрос в нашу службу поддержки.</p>
        <p>info1@geoleader.ru</p>
        
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}
