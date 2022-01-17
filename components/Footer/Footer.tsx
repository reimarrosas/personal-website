import styles from "../../styles/Footer/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span>&copy; 2022</span>
      <span>-</span>
      <span>Reimar Rosas</span>
      <span>-</span>
      <a
        className={styles.link}
        href="https://github.com/reimarrosas"
        target="_blank"
      >
        Github
      </a>
    </footer>
  );
};

export default Footer;
