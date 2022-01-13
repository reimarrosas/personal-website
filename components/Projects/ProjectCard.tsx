import { BiCodeBlock, BiPlayCircle } from "react-icons/bi";

import styles from "../../styles/Project/ProjectCard.module.css";
import { tagMap } from "../../utils/tags";
import { Project } from "./Highlighted";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{project.project_title}</h1>
      <img
        className={styles.img}
        src={project.project_image}
        alt={`Image of the ${project.project_title} website`}
      />
      <p className={styles.desc}>{project.project_desc}</p>
      <h2 className={styles.subheading}>Tools Used</h2>
      <ul className={styles.toolList}>
        {project.project_tools.map((tool, ind) => (
          <li key={ind} className={styles.tool}>
            {tagMap.get(tool)}
          </li>
        ))}
      </ul>
      <div className={styles.linkGroup}>
        <a
          href={project.github_link}
          target="_blank"
          title="Github Link"
          className={styles.githubLink}
        >
          <BiCodeBlock />
        </a>
        <a
          href={project.site_link}
          target="_blank"
          title="Website Link"
          className={styles.siteLink}
        >
          <BiPlayCircle />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
