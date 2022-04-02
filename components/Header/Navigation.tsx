import styles from "../../styles/Header/Navigation.module.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navlist}>
        <a className={styles.navlink} href="https://blog.reimarrosas.me">
          <li>Blog</li>
        </a>
        <a className={styles.navlink} href="/projects">
          <li>Projects</li>
        </a>
        <a className={styles.navlink} href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
