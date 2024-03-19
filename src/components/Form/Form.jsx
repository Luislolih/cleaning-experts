import { useForm, ValidationError } from "@formspree/react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Form.module.css";
import services from "../../data/services";
import { useState } from "react";
import { Link } from "react-router-dom";
const Form = () => {
    const { language } = useLanguage();
    const [state, handleSubmit] = useForm("xnqebzpq");

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");

    const isFormInvalid =
        name === "" ||
        number === "" ||
        email === "" ||
        service === "" ||
        message === "";

    const serviceOptions = services[language];
    if (state.succeeded) {
        return (
            <div className={styles.successfulAlert}>
                <p>
                    {language === "en"
                        ? "Thank you for contacting us! We will contact you as soon as possible."
                        : "¡Gracias por contactarnos! Te estaremos respondiendo a la brevedad."}
                </p>
                <Link to="/">
                    <button className={styles.buttonMenu}>
                        {" "}
                        {language === "en" ? "MAIN MENU" : "MENÚ PRINCIPAL"}
                    </button>
                </Link>
            </div>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <select
                className={styles.selectForm}
                value={service}
                onChange={(e) => setService(e.target.value)}
            >
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
            <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                type="submit"
                disabled={isFormInvalid}
                className={
                    isFormInvalid ? styles.buttonFormInvalid : styles.buttonForm
                }
            >
                {language === "en" ? "SUBMIT" : "ENVIAR"}
            </button>
        </form>
    );
};
export default Form;
