import { ReactNode } from "react";

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

export type ProjectProps = {
  projectList: Project[];
};

export type ProjectCardProps = {
  project: Project;
  renderProp?: () => JSX.Element
}