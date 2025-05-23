import { useState } from "react"
import { tabs } from "../../constants/tabs"
import type { TabKey } from "../../constants/tabs"
import AboutSection from "./AboutSection"
import ProductsSection from "./ProductsSection"
import ServicesSection from "./ServicesSection"
import ContactsSection from "./ContactsSection"
import HomeSection from "./HomeSection"
import styles from "./Home.module.css"
import Header from "../Header/Header"
import SupportModal from "../../components/Support/SupportModal"
// import BannerCarousel from "../../components/BannerCarousel/BannerCarousel"
import Footer from "../Footer/Footer"
export default function Home() {
  const [showSupportModal, setShowSupportModal] = useState(false)
  const [activeTab, setActiveTab] = useState<TabKey>("home")
  const handleTabChange = (key: TabKey) => {
    if (key === "contacts") {
      setShowSupportModal(true)
    } else {
      setActiveTab(key)
    }
  }
  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />
      case "products":
        return <ProductsSection />
      case "services":
        return <ServicesSection />
      case "contacts":
        return <ContactsSection />
      case "home":
        return <HomeSection />
      default:
        return null
    }
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.headerWrapper}>
        <Header />
        <nav className={styles.nav}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`${styles.button}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}>
          <h1 className={styles.bannerTitle}>Добро пожаловать в Geoleader</h1>
          <p className={styles.bannerSubtitle}>Мы предоставляем лучшие геоинформационные решения</p>
          <div className={styles.rockCanvas}>
          </div>
        </div>
      </div>
    
      <div className={styles.contentWrapper}>
        {renderSection()}
      </div>

    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerBottom}>
            <p>625051 г. Тюмень, ул. Пермякова, д. 43а, 2 этаж</p>
            <p>тел.: (495) 982-36-31</p>
          <a href="#">Политика обработки персональных данных</a>
          <p>© 2025 Geoleader</p>
        </div>
      </footer>
    </div>

      <SupportModal
        isOpen={showSupportModal}
        onClose={() => setShowSupportModal(false)}
      />
    </div>
  )
}
