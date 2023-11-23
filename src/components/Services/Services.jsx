import styles from "./Services.module.css";
import { useLanguage } from "../../context/LanguageContext";
import services from "../../data/services";
import { Link } from "react-router-dom";
const Services = () => {
  const { language } = useLanguage();
  const serviceOptions = services[language];

  return (
    <main className={styles.mainServices}>
      <div className={styles.servicesContainer}>
        {serviceOptions.map((service, index) => (
          <Link to={`/services/${service.slug}`}>
            <div key={index} className={styles.imgContainer}>
              <img src={service.image} className={styles.imgService}></img>

              <div className={styles.textContainerServices}>
                <strong>
                  <p className={styles.nameService}>{service.title}</p>
                </strong>
                <p className={styles.descriptionService}>
                  {service.description}
                </p>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.contactButtonService}>
                  {" "}
                  {language === "en" ? "MORE INFO" : "INFORMACIÓN"}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default Services;
