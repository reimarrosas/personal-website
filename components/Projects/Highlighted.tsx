import Link from "next/link";
import { BiLastPage } from "react-icons/bi";

import ProjectCard from "./ProjectCard";
import styles from "../../styles/Project/Highlighted.module.css";
import { ProjectProps } from "./types";
import Navigate from "../Navigate";

const Highlighted: React.FC<ProjectProps> = ({ projectList }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Highlighted Projects</h1>
      <ul className={styles.projectList}>
        {projectList?.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
        <Navigate
          href="/projects"
          content="View All"
          outerClass={styles.viewMore}
          icon={() => <BiLastPage />}
          forward
        />
      </ul>
    </section>
  );
};

export default Highlighted;
