import Link from "next/link";
import { BiLastPage } from "react-icons/bi";

import ProjectCard from "./ProjectCard";
import styles from "../../styles/Project/Highlighted.module.css";

export type Project = {
  id: number;
  inserted_at: string;
  updated_at: string;
  project_title: string;
  project_desc: string;
  project_tools: string[];
  github_link: string;
  site_link: string;
  project_image: string;
  is_highlighted: boolean;
};

export type HighlightedProps = {
  projectList: Project[];
};

const Highlighted: React.FC<HighlightedProps> = ({ projectList }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Highlighted Projects</h1>
      <ul className={styles.projectList}>
        {projectList?.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
        <div className={styles.viewMore}>
          <Link href="/projects">
            <a className={styles.anchor}>
              <span>View More!</span>
              <BiLastPage />
            </a>
          </Link>
        </div>
      </ul>
    </section>
  );
};

export default Highlighted;
