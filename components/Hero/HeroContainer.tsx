import { PropsWithChildren } from "react";

import styles from "../../styles/Hero/HeroContainer.module.css";

const HeroContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.bar}>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
      </div>
      {children}
    </div>
  );
};

export default HeroContainer;
