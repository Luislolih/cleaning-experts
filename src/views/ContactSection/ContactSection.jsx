import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./ContactSection.module.css";
const ContactSection = () => {
    return (
        <>
            <NavBar />
            <div className={styles.space}></div>
            <Form />
            <Footer />
        </>
    );
};

export default ContactSection;
