import HeroContainer from "./HeroContainer";
import styles from "../../styles/Hero/Hero.module.css";

const Hero: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <section className={styles.hero}>
          <h1 className={styles.title}>👋 Hi I'm Reimar!</h1>
          <p className={styles.content}>
            Currently a Computer Science Technology Student in Vanier College
            living in Montreal, Quebec. Proficient in Frontend Technologies like
            HTML, CSS, JavaScript + Frameworks, with working knowledge of
            Backend Technologies like NodeJS, ASP.NET, Django, and Spring.
          </p>
        </section>
      </HeroContainer>
    </>
  );
};

export default Hero;
