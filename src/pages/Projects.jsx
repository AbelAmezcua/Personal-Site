import React from "react";
import ProjectSection from "../components/ProjectSection";
import { ProjectObjOne } from "../components/ProjectSection/Data";
function Projects() {
  return (
    <>
      <ProjectSection {...ProjectObjOne} />
    </>
  );
}

export default Projects;
