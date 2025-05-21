import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.address}>
        <p>117292 г. Москва, ул. Дм.Ульянова, д. 16, к. 2, оф. 347, тел.: (495) 982-36-31</p>
        <p>625051 г. Тюмень, ул. Пермякова, д. 43а, 2 этаж, тел.: (3452) 31-56-07</p>
        <p>
          <a href="mailto:info1@geoleader.ru" className={styles.emailLink}>info1@geoleader.ru</a>
        </p>
      </div>

    <a href="https://www.geoleader.ru/images/policypd/policypd_ru.pdf" target="_blank">Политика обработки персональных данных</a>

      <div
        className={styles.scrollTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Наверх ↑
      </div>

      <div className={styles.copyRight}>© 2025 Geoleader</div>
    </footer>
  );
}
