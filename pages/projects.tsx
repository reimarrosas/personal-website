import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";

import Header from "../components/Header/Header";
import ProjectCard from "../components/Projects/ProjectCard";
import { Project, ProjectProps } from "../components/Projects/types";
import { LoginContext } from "../context/LoginProvider";
import { supabase } from "../utils/supabase";
import styles from "../styles/Project/Projects.module.css";

const Projects: NextPage<ProjectProps> = ({ projectList }) => {
  const { state: isLoggedIn } = useContext(LoginContext);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>All Projects</h1>
        <ul className={styles.projectList}>
          {projectList?.map((project, ind) => (
            <li key={ind}>
              <ProjectCard
                project={project}
                renderProp={
                  isLoggedIn
                    ? () => (
                        <div className={styles.edit}>
                          <Link
                            href={{
                              pathname: "/admin/add-projects",
                              query: project,
                            }}
                          >
                            <a className={styles.editLink}>[Edit]</a>
                          </Link>
                        </div>
                      )
                    : undefined
                }
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await supabase.from<Project>("projects").select();

  const data = res.data ?? [];
  const project: Project = {
    id: 2,
    project_title: "Gawain",
    project_desc: "A simple Todo App created using React and React Router",
    project_image: "https://i.imgur.com/thPJUZK.png",
    github_link: "https://github.com/reimarrosas/gawain",
    site_link: "https://gawain-todoapp.netlify.app/",
    project_tools: ["react", "javascript"],
    inserted_at: Date.now().toString(),
    updated_at: Date.now().toString(),
    is_highlighted: false,
  };

  return {
    props: {
      projectList: [...data, project],
    },
  };
};

export default Projects;
