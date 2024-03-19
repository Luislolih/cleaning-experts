import styles from "./NavBar.module.css";
import { useLanguage } from "../../context/LanguageContext";

import logo from "./cleaning-experts-logo.png";
import { useState } from "react";
import services from "../../data/services";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import { LiaLanguageSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "es" : "en");
        setShowLanguage(!showLanguage);
    };

    const [showServices, setShowServices] = useState(false);

    const handleShowServices = () => {
        setShowServices(!showServices);
    };

    const [showLanguage, setShowLanguage] = useState(false);
    const handleMouseEnterLanguage = () => {
        setShowLanguage(!showLanguage);
    };

    const handleMouseLeaveLanguage = () => {
        setShowLanguage(false);
    };

    const serviceOptions = services[language];

    const [menuVisible, setMenuVisible] = useState(false);

    const changeMenuVisible = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <main className={styles.mainContainer}>
            <Link to="/">
                <div className={styles.logoContainer}>
                    <img
                        src={logo}
                        className={styles.logoNavBar}
                        alt="Cleaning Experts Logo"
                    />
                </div>
            </Link>

            <HiOutlineMenuAlt1
                className={styles.iconHamburger}
                onClick={changeMenuVisible}
            />

            <div
                className={`${styles.rightContainer} ${
                    menuVisible ? styles.rightContainerVisible : ""
                }`}
            >
                <div className={styles.responsiveEngCont}>
                    <div className={styles.totalLanguage}>
                        <button
                            onClick={handleMouseEnterLanguage}
                            className={styles.buttonNavLanguage}
                        >
                            {language === "en" ? (
                                <>
                                    <LiaLanguageSolid
                                        className={styles.iconFlag}
                                    />{" "}
                                    <p className={styles.textChangeLanguage}>
                                        English
                                    </p>
                                    <BiChevronDown
                                        className={styles.iconBiChevronDown}
                                    />
                                </>
                            ) : (
                                <>
                                    <LiaLanguageSolid
                                        className={styles.iconFlag}
                                    />
                                    <p className={styles.textChangeLanguage}>
                                        Español
                                    </p>{" "}
                                    <BiChevronDown
                                        className={styles.iconBiChevronDown}
                                    />
                                </>
                            )}
                        </button>
                        {showLanguage && (
                            <div
                                // onMouseEnter={handleMouseEnterLanguage}
                                // onMouseLeave={handleMouseLeaveLanguage}
                                onClick={toggleLanguage}
                                className={styles.languageContainer}
                            >
                                <p className={styles.textLanguage}>
                                    {language === "en" ? "Spanish" : "Inglés"}
                                </p>
                            </div>
                        )}
                    </div>
                    <AiOutlineClose
                        className={styles.iconClose}
                        onClick={changeMenuVisible}
                    />
                </div>

                <div className={styles.itemsRight}>
                    <div className={styles.ourServicesContainer}>
                        {/* AQUÍ
          AQUÍ
          AQUÍ
          AQUÍ
           */}
                        <div className={styles.servicesDrop}>
                            <div className={styles.servicesArrow}>
                                <strong>
                                    <Link
                                        to="/services"
                                        className={styles.buttonNav}
                                    >
                                        {language === "en"
                                            ? "SERVICES"
                                            : "SERVICIOS"}
                                    </Link>
                                </strong>
                                <BiChevronDown
                                    className={styles.arrowIcon}
                                    onClick={() => handleShowServices()}
                                />
                            </div>
                            <ul
                                className={`${styles.servicesContainer} ${
                                    !showServices && styles.hidden
                                }`}
                            >
                                {serviceOptions.map((service, index) => (
                                    <Link to={`/services/${service.slug}`}>
                                        <li
                                            key={index}
                                            className={styles.serviceOptions}
                                        >
                                            {service.title}
                                            {/* Todo: service/:id */}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <strong>
                        <Link to="/about-us" className={styles.buttonNav}>
                            {language === "en" ? "ABOUT US" : "NOSOTROS"}
                        </Link>
                    </strong>
                    <strong>
                        <Link to="/contact" className={styles.buttonNav}>
                            {language === "en" ? "CONTACT US" : "CONTÁCTANOS"}
                        </Link>
                    </strong>
                </div>
            </div>
            {/* DIV QUE SIRVE PARA CERRAR MENU */}
            <div
                className={`${styles.overlay} ${
                    menuVisible ? styles.overlayVisible : ""
                }`}
                onClick={changeMenuVisible}
            />
        </main>
    );
};

export default NavBar;
