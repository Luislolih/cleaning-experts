import imageBanner from "./cleaning-experts-banner.png";
import imageBlog from "./cleaning-experts-blog.jpg";
import styles from "./Landing.module.css";
import { useLanguage } from "../../context/LanguageContext";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

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
    </main>
  );
};

export default Landing;
