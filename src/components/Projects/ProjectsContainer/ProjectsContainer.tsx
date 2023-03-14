import { Store } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

const Card = dynamic(import("./Card").then((mod) => mod.Card));

export interface ProjectsContainerInterface {}

const ProjectsContainer: React.FC<ProjectsContainerInterface> = () => {
  const { data } = useSelector(
    (store: Store) => store.options.content.projects
  );

  return (
    <div className="flex flex-wrap justify-around w-full px-6 max-w-[1200px]">
      {data.map((project, i) => (
        <Card
          key={`pjt-${i}`}
          name={project.name}
          visit={project.visit}
          repo={project.repo}
          description={project.description}
          img={project.img}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
