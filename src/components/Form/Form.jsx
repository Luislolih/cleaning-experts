import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Form.module.css";
import services from "../../data/services";
const Form = () => {
    const { language } = useLanguage();
    const [state, handleSubmit] = useForm("xnqebzpq");

    const serviceOptions = services[language];
    if (state.succeeded) {
        return (
            <p>
                {language === "en"
                    ? "Thank you for contacting us! We will contact you as soon as possible."
                    : "¡Gracias por contactarnos! Te estaremos respondiendo a la brevedad."}
            </p>
        );
    }
    return (
        <form onSubmit={handleSubmit} className={styles.formMain}>
            <h2 className={styles.titleForm}>
                {" "}
                {language === "en" ? "CONTACT US" : "CONTÁCTANOS"}
            </h2>
            <label htmlFor="name" className={styles.labelForm}>
                {language === "en" ? "Full name:" : "Nombres y apellidos:"}
            </label>
            <input
                id="name"
                type="text"
                name="name"
                className={styles.inputForm}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="number" className={styles.labelForm}>
                {language === "en"
                    ? "Cell phone number:"
                    : "Número de teléfono:"}
            </label>
            <input
                id="number"
                type="number"
                name="number"
                className={styles.inputForm}
            />
            <ValidationError
                prefix="Number"
                field="number"
                errors={state.errors}
            />

            <label htmlFor="email" className={styles.labelForm}>
                {language === "en" ? "Email adress:" : "Correo electrónico"}
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className={styles.inputForm}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <label htmlFor="email" className={styles.labelForm}>
                {language === "en"
                    ? "Service of your interest:"
                    : "Servicio de tu interés:"}
            </label>
            <select className={styles.selectForm}>
                <option value="" disabled selected>
                    {" "}
                    {language === "en"
                        ? "Select a service"
                        : "Selecciona un servicio"}
                </option>
                {serviceOptions.map((service) => (
                    <option value={service.title}>{service.title}</option>
                ))}
            </select>

            <label htmlFor="email" className={styles.labelForm}>
                {language === "en"
                    ? "Leave us a Message:"
                    : "Déjanos un mensaje:"}
            </label>
            <textarea id="message" name="message" />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                type="submit"
                disabled={state.submitting}
                className={styles.buttonForm}
            >
                Submit
            </button>
        </form>
    );
};
export default Form;
