import Navigation from "./Navigation";
import styles from "../../styles/Header/Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header} id="header">
        <a href="#header">
          <h1 className={styles.headerTitle}>Reimar Rosas</h1>
        </a>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
