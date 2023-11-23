import iconWhatsApp from "./whatsapp-icon.png";
import styles from "./WhatsAppIcon.module.css";
import { useLanguage } from "../../context/LanguageContext";

const WhatsAppIcon = () => {
  const { language } = useLanguage();

  const whatsappLinkEN =
    "https://wa.me/51926929022?text=Hi,%20Cleaning%20Experts!";
  const whatsappLinkES =
    "https://wa.me/51926929022?text=¡Hola,%20Cleaning%20Experts!";

  return (
    <a
      href={language === "en" ? whatsappLinkEN : whatsappLinkES}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={iconWhatsApp} className={styles.WhatsAppIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppIcon;
