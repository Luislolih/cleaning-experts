import React from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import services from "../../data/services";
import styles from "./ServiceCard.module.css";
import WhatsAppIcon from "../WhatsAppIcon/WhatsAppIcon";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const ServiceCard = () => {
  const { slug } = useParams();
  const { language } = useLanguage();

  const service = services[language].find((service) => service.slug === slug);

  if (!service) {
    return <div>El servicio no fue encontrado</div>;
  }

  return (
    <main className={styles.mainServiceCard}>
      <NavBar />
      <h1 className={styles.titleService}>{service.title}</h1>
      <div className={styles.containerServiceCard}>
        {" "}
        <div className={styles.containerLeftCard}>
          <div className={styles.imgContainer}>
            <img
              src={service.image}
              alt={service.title}
              className={styles.imgService}
            />
          </div>
          <p className={styles.descriptionService}>{service.fullDescription}</p>
        </div>
        <div className={styles.containerCompleteRangePrice}>
          <h2 className={styles.titleRangePrice}>
            {language === "en" ? "Range Price" : "Rango de Precios"}
          </h2>
          {/*  */}
          <div className={styles.containerLine}>
            <div className={styles.containerRangePrice}>
              <p>MIN.</p>
              <p>MAX.</p>
            </div>
            <hr className={styles.lineRange} />
            <div className={styles.containerRangePrice}>
              <p>{service.rangePrice.min}</p>
              <p>{service.rangePrice.max}</p>
            </div>
          </div>
          {/*  */}
          <button className={styles.buttonRequest}>
            {language === "en" ? "REQUEST" : "SOLICITAR"}
          </button>
        </div>
      </div>
      <WhatsAppIcon />
      <Footer />
    </main>
  );
};

export default ServiceCard;
