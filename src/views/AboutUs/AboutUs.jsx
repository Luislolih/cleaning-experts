import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
    return (
        <>
            <NavBar />
            <div className={styles.space}></div>
            <Form />
            <Footer />
        </>
    );
};

export default AboutUs;
