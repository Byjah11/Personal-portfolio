import styled from "styled-components";
import Project from "./Project";
import { projectsData } from "../data";

const Container = styled.div``;

const Projects = () => {
  return (
    <Container>
      {projectsData.map((p) => (
        <Project key={p.id} p={p} />
      ))}
    </Container>
  );
};

export default Projects;
