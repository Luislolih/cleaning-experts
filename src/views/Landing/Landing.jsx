import imageBanner from "./cleaning-experts-banner.png";
import imageBlog from "./cleaning-experts-blog.jpg";
import styles from "./Landing.module.css";
import { useLanguage } from "../../context/LanguageContext";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Services from "../../components/Services/Services";
import paolo from "./paolo-loli.jpg";
import ursula from "./ursula-gutierrez.jpg";

const Landing = () => {
    const { language } = useLanguage();
    return (
        <main className={styles.mainLanding}>
            <div className={styles.containerImageBanner}>
                <img src={imageBanner} className={styles.imageBanner}></img>
                <div className={styles.containerPrincipalTitle}>
                    <h1 className={styles.principalTitle}>
                        CLEANING <br /> EXPERTS
                    </h1>
                    <strong>
                        <p className={styles.principalSubtitle}>
                            {language === "en"
                                ? "CLEANING PROFESSIONALS"
                                : "PROFESIONALES EN LIMPIEZA"}
                        </p>
                    </strong>
                </div>

                <div className={styles.containerSocialMedia}>
                    <div className={styles.socialMediaL}>
                        <div className={styles.socialMediaLTwo}>
                            <FaInstagramSquare />
                            <p>/cleaningexperts</p>
                        </div>
                        <div className={styles.socialMediaLTwo}>
                            <FaFacebookSquare />
                            <p>/cleaningexperts</p>
                        </div>
                    </div>
                    <div className={styles.socialMediaR}>
                        <div className={styles.socialMediaRTwo}>
                            <FaPhoneSquareAlt />
                            <p>+511 999888777</p>
                        </div>
                        <div className={styles.socialMediaRTwo}>
                            <MdMail />
                            <p>cleaningexperts@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="phraseAnimation" className={styles.phraseContainer}>
                <h2 className={styles.titlePhrase}>
                    {language === "en"
                        ? "We transform the space into your space."
                        : "Transformamos el espacio en tu espacio."}
                </h2>
            </div>

            <div className={styles.blogContainer}>
                <div className={styles.containerTextBlog}>
                    <h2 className={styles.titleBlog}>
                        {language === "en" ? "We are..." : "Somos..."}
                    </h2>
                    <p className={styles.contentBlog}>
                        {language === "en"
                            ? "At our core, professionalism and experience define our DNA. Specializing in cleaning services has been our key focus and area of growth over time."
                            : "En esencia, la profesionalidad y la experiencia definen nuestro ADN. Especializarnos en servicios de limpieza ha sido nuestro enfoque clave y área de crecimiento a lo largo del tiempo."}
                    </p>
                </div>

                <img src={imageBlog} className={styles.imageBlog}></img>
            </div>
            <h3 className={styles.titleOurServices}>
                {language === "en" ? "OUR SERVICES" : "NUESTROS SERVICIOS"}
            </h3>
            <Services />

            {/* NEW SECTION */}
            <div className={styles.peopleContainer}>
                <h2 className={styles.titlePeople}>
                    {language === "en"
                        ? "Behind every project..."
                        : "Detrás de todo proyecto..."}
                </h2>
                <p>
                    {language === "en"
                        ? "There is always a capable leader, with vision and ability to make things happen. That is the case of Paolo Loli, a renowned Peruvian lawyer and businessman who emigrated to the United States to grow professionally and personally."
                        : "Siempre se encuentra un líder capaz, con visión y capacidad para hacer que las cosas sucedan. Ese es el caso de Paolo Loli, un reconocido abogado y empresario peruano que emigró hacia los Estados Unidos para crecer profesional y personalmente."}
                </p>
                <div className={styles.containerImagesPeople}>
                    <div className={styles.containerImgPeople}>
                        <img className={styles.imgPeople} src={paolo}></img>
                        <p className={styles.namePeople}>
                            Paolo Loli Torres{" "}
                            <sub className={styles.subText}>/ Founder</sub>
                        </p>
                    </div>

                    <div className={styles.containerImgPeople}>
                        <img className={styles.imgPeople} src={ursula}></img>
                        <p className={styles.namePeople}>
                            Úrsula Gutierrez{" "}
                            <sub className={styles.subText}>
                                / Administrator
                            </sub>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Landing;
