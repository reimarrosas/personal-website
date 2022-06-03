import HeroContainer from "./HeroContainer";
import styles from "../../styles/Hero/Hero.module.css";

const Hero: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <section className={styles.hero}>
          <h1 className={styles.title}>👋 Hi I&apos;m Reimar!</h1>
          <p className={styles.content}>
            Currently a Computer Science Technology Student. Proficient in
            Frontend Technologies like HTML, CSS, JavaScript + Frameworks, with
            working knowledge of Backend Technologies like NodeJS, ASP.NET and
            PHP. Technology is my lifeblood.
          </p>
        </section>
      </HeroContainer>
    </>
  );
};

export default Hero;
