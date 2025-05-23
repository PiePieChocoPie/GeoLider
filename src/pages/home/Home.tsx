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



      <div className={styles.contentWrapper}>
        {renderSection()}
      </div>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>

      <SupportModal
        isOpen={showSupportModal}
        onClose={() => setShowSupportModal(false)}
      />
    </div>
  )
}
