import ContactForm from "./ContactForm";
import styles from "../../styles/Contact/Contact.module.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h1 className={styles.title}>Get In Touch!</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
