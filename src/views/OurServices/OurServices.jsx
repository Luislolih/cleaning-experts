import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Services from "../../components/Services/Services";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./OurServices.module.css";
import WhatsAppIcon from "../../components/WhatsAppIcon/WhatsAppIcon";

const OurServices = () => {
  const { language } = useLanguage();
  return (
    <main className={styles.ourServicesContainer}>
      <NavBar />

      <div className={styles.containerDescription}>
        <h1 className={styles.titleOurServices}>
          {language === "en" ? "OUR SERVICES" : "NUESTROS SERVICIOS"}
        </h1>
        <p className={styles.descriptionServices}>
          {language === "en"
            ? "We are experts in cleaning houses. Those are some of our principal services, all with our guarantee of satisfaction."
            : "Somos expertos en limpieza de casas. Estos son algunos de nuestros principales servicios, todos con nuestra garantía de satisfacción."}
        </p>
        <button className={styles.buttonContactUsServices}>
          {language === "en" ? "CONTACT US" : "CONTÁCTANOS"}
        </button>
      </div>
      <div className={styles.servicesComponent}>
        <Services />
      </div>
      <WhatsAppIcon />
      <Footer />
    </main>
  );
};

export default OurServices;
