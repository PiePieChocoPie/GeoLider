import React from "react";
import styles from "./OfficeMapModal.module.css"; // стили модалки

interface OfficeMapModalProps {
  onClose: () => void;
}

export const OfficeMapModal: React.FC<OfficeMapModalProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>×</button>
        <h2>Наш офис</h2>

        <div className={styles.mapWrapper}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=65.580843%2C57.114758&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNzE4NTUyMjc2Ej_QoNC-0YHRgdC40Y8sINCi0Y7QvNC10L3RjCwg0YPQu9C40YbQsCDQn9C10YDQvNGP0LrQvtCy0LAsIDQz0JAiCg1lKYNCFYN1ZEI%2C&z=16.78"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ borderRadius: "10px", border: "none" }}
            allowFullScreen
          />
        </div>

        <p><strong>Адрес:</strong> г. Тюмень, ул. Пермякова, д. 43а</p>
      </div>
    </div>
  );
};
