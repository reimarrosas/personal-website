import Navigation from "./Navigation";
import styles from "../../styles/Header/Header.module.css";
import { PropsWithChildren } from "react";
import Link from "next/link";

type prop = {
  isIndex?: boolean;
  renderNav?: boolean;
};

const Header: React.FC<PropsWithChildren<prop>> = ({ isIndex, renderNav }) => {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header} id="header">
        {isIndex ? (
          <a href="#home">
            <h1 className={styles.headerTitle}>Reimar Rosas</h1>
          </a>
        ) : (
          <Link href="/">
            <a>
              <h1 className={styles.headerTitle}>Reimar Rosas</h1>
            </a>
          </Link>
        )}
        {renderNav && <Navigation />}
      </header>
    </div>
  );
};

export default Header;
