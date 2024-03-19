import styles from "./Footer.module.css";
import { useLanguage } from "../../context/LanguageContext";
import services from "../../data/services";
import { Link } from "react-router-dom";
const Footer = () => {
    const { language, setLanguage } = useLanguage();

    const serviceOptions = services[language];

    return (
        <main className={styles.mainFooter}>
            <div className={styles.sectionOneFContainer}>
                <div className={styles.containerServicesF}>
                    <Link to="/services">
                        <strong>
                            <p className={styles.titleSOF}>
                                {language === "en" ? "Services" : "Servicios"}
                            </p>
                        </strong>
                    </Link>
                    {serviceOptions.map((services, index) => (
                        <Link to={`/services/${services.slug}`}>
                            <p className={styles.pFirstF} key={index}>
                                {services.title}
                            </p>
                        </Link>
                    ))}
                </div>

                <div className={styles.containerContactUs}>
                    <strong>
                        <Link to="/contact">
                            <p className={styles.titleSOF}>
                                {language === "en"
                                    ? "Contact Us"
                                    : "Contáctanos"}
                            </p>
                        </Link>
                    </strong>
                    <p className={styles.pFirstF}>(574) 368-3035</p>
                    <p className={styles.pFirstF}>
                        luisloli@icleaningexperts.com
                    </p>
                    <p className={styles.pFirstF}>
                        1860 South Stone Maple Lane 46515, Elkhart - Indiana
                    </p>
                </div>

                <div className={styles.containerAboutTermsF}>
                    <Link to="/about-us">
                        <strong>
                            <p className={styles.titleSOF}>
                                {language === "en"
                                    ? "About Us"
                                    : "Sobre Nosotros"}
                            </p>
                        </strong>
                    </Link>
                    <p className={styles.pFirstF}>
                        {language === "en" ? "The Company" : "La Compañía"}
                    </p>
                    {/* <p className={styles.pFirstF}>
                        {language === "en"
                            ? "Terms & Conditions" 
                            : "Términos y Condiciones"}
                    </p> */}
                </div>
            </div>
            <div className={styles.sectionTwoFContainer}>
                <strong>
                    <p className={styles.titleSTF}>Cleaning Experts</p>
                </strong>
                <p className={styles.pSecondF}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem enim ex nobis quos! Consequuntur recusandae autem
                    natus sint. Voluptatem dignissimos fugiat delectus beatae
                    debitis ea dolorum veritatis ipsam reprehenderit impedit.
                </p>
            </div>
            <p className={styles.brandRegisterFooter}>
                Cleaning Experts © 2023
            </p>
        </main>
    );
};

export default Footer;
