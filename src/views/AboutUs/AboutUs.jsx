import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./AboutUs.module.css";
import paolo from "./paolo-loli.jpg";
const AboutUs = () => {
    const { language } = useLanguage();

    return (
        <>
            <NavBar />
            <div className={styles.space}></div>
            <div className={styles.mainAbout}>
                <h1 className={styles.title}>
                    {language === "en"
                        ? "Welcome to Cleaning Experts"
                        : "Bienvenido a Cleaning Experts"}
                </h1>
                <p className={styles.pContent}>
                    {language === "en"
                        ? "We are a team committed to excellence in cleaning services. Our approach is based on integrity, customer satisfaction, and respect for the environment. Our experience is our own life and Christian spirit over the years."
                        : "Somos un equipo comprometido con la excelencia en servicios de limpieza. Nuestro enfoque se basa en la integridad, la satisfacción del cliente y el respeto por el medio ambiente. Nuestra experiencia es nuestra propia vida y espíritu cristiano de años."}
                </p>
                <h2 className={styles.subTitle}>
                    {language === "en" ? "Our Mission" : "Nuestra Misión"}
                </h2>
                <p className={styles.pContent}>
                    {language === "en"
                        ? "At Cleaning Experts, our mission is to provide exceptional cleaning services that make life easier for our customers. We strive to earn their trust and become their trusted partner in home care."
                        : "En Cleaning Experts, nuestra misión es proporcionar servicios de limpieza excepcionales que hagan la vida más fácil para nuestros clientes. Nos esforzamos por ganar su confianza y convertirnos en su socio de confianza en el cuidado de su hogar."}
                </p>

                <h2 className={styles.subTitle}>
                    {language === "en"
                        ? "Environmental Commitment"
                        : "Compromiso Ecológico"}
                </h2>
                <p className={styles.pContent}>
                    {language === "en"
                        ? "We are committed to using eco-friendly cleaning materials that are environmentally friendly. We believe in the importance of contributing to keeping our Earth clean for future generations."
                        : "Nos comprometemos a utilizar materiales de limpieza ecológicos que sean amigables con el medio ambiente. Creemos en la importancia de contribuir a mantener nuestra Tierra limpia para las generaciones futuras."}
                </p>

                <h2 className={styles.subTitle}>
                    {language === "en"
                        ? "Quality Services"
                        : "Servicios de Calidad"}
                </h2>
                <p className={styles.pContent}>
                    {language === "en"
                        ? "We have a team of highly trained and committed employees dedicated to providing exceptional service on every visit. Our services are designed to exceed your expectations and ensure customer satisfaction."
                        : "Contamos con un equipo de empleados altamente capacitados y comprometidos con proporcionar un servicio excepcional en cada visita. Nuestros servicios están diseñados para superar sus expectativas y garantizar la satisfacción del cliente."}
                </p>

                <h2 className={styles.subTitle}>
                    {language === "en"
                        ? "A Committed and Capable Leader"
                        : "Un Líder Comprometido y Capaz"}
                </h2>
                <p className={styles.pContent}>
                    {language === "en"
                        ? "Meet Paolo Loli, a Peruvian lawyer and entrepreneur with a wealth of experience in exportation, team leadership, and legal processes. His extensive background, combined with his intellectual and executive abilities, make him a formidable leader."
                        : "Conoce a Paolo Loli, un abogado y empresario peruano con experiencia en exportación, liderazgo de equipos y procesos jurídicos. Su amplia trayectoria, combinada con sus habilidades intelectuales y ejecutivas, lo convierten en un líder formidable."}
                </p>
                <p className={styles.pContent}>
                    {language === "en"
                        ? "With a proven track record of success in various industries, Paolo is dedicated to achieving excellence in every endeavor. He is committed to driving growth, fostering innovation, and ensuring the success of his team and business ventures."
                        : "Con una trayectoria comprobada de éxito en diversas industrias, Paolo está dedicado a alcanzar la excelencia en cada emprendimiento. Se compromete a impulsar el crecimiento, fomentar la innovación y garantizar el éxito de su equipo y sus iniciativas empresariales."}
                </p>
                <div className={styles.containerImg}>
                    <img src={paolo} className={styles.imgLeader}></img>
                    <p className={styles.nameLeader}>
                        Paolo Loli Torres
                        <sub className={styles.subNameLeader}>
                            /Founder & CEO
                        </sub>
                    </p>
                </div>
            </div>{" "}
            <Form />
            <Footer />
        </>
    );
};

export default AboutUs;
