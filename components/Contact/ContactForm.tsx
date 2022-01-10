import { useState, FormEvent } from "react";
import { FiSend } from "react-icons/fi";
import styles from "../../styles/Contact/ContactForm.module.css";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className={styles.form}
      action="https://formspree.io/f/mdobkoqp"
      method="post"
    >
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name">
          Full Name
        </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(evt: FormEvent<HTMLInputElement>) =>
            setName(evt.currentTarget.value)
          }
          placeholder="John Smith"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(evt: FormEvent<HTMLInputElement>) =>
            setEmail(evt.currentTarget.value)
          }
          placeholder="someone@example.com"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={5}
          className={styles.textarea}
          value={message}
          onChange={(evt: FormEvent<HTMLTextAreaElement>) =>
            setMessage(evt.currentTarget.value)
          }
          placeholder="Enter your message..."
          required
        ></textarea>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.submit}>
            <span className={styles.submitText}>SEND</span>
            <FiSend />
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
