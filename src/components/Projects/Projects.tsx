import { Store } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";
import { ProjectsContainer } from "./ProjectsContainer";

export interface ProjectsInterface {}

const Projects: React.FC<ProjectsInterface> = () => {
  const {
    projects: { title },
    navbar: {
      links: { projects },
    },
  } = useSelector((store: Store) => store.options.content);
  return (
    <div className="w-full relative pt-1 pb-14 bg-base-300 dark:bg-dark-base-300">
      <div id={projects} className="absolute -top-28"></div>
      <div className="flex flex-col justify-center items-center mx-auto">
        <h1 className="title">{title}</h1>
        <ProjectsContainer />
      </div>
    </div>
  );
};

export default Projects;
