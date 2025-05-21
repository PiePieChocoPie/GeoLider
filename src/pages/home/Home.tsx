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
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel"
import Footer from "../Footer/Footer"
export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("home")

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
    <div>
      <div className={styles.headerWrapper}>
        <Header/>
      </div>

      <nav className={styles.nav}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`${styles.button} ${activeTab === tab.key ? styles.buttonActive : styles.buttonInactive}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <BannerCarousel />
      <div className={styles.contentWrapper}>
        {renderSection()}
      </div>
      <Footer/>
    </div>
  )
}
