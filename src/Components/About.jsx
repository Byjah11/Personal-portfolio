import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from "../utils/breakpoints";

const Container = styled.div``;

const Title = styled.h2`
  padding: 0 20px;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 20px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const SkillsSection = styled.div`
  flex: 1;
  margin-bottom: 16px;
`;
const SkillsTitle = styled.h3`
  color: var(--color-primary);
`;
const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
`;
const SkillsItem = styled.div`
  margin-top: 8px;
  font-size: 1.5rem;
  span {
    margin-left: 16px;
  }
`;

const About = () => {
  const skills = {
    front: [
      ["HTML", "html5"],
      ["CSS", "css3-alt"],
      ["JavaScript", "js"],
      ["React", "react"],
      ["Redux", ""],
      ["styled-components", ""],
    ],
    back: [
      ["Node", "node-js"],
      ["Express", ""],
      ["MongoDB", ""],
    ],
    other: [["Git", ""]],
  };

  return (
    <Container>
      <Title>My skills</Title>
      <Skills>
        <SkillsSection>
          <SkillsTitle>Front-end</SkillsTitle>
          <SkillsList>
            {skills.front.map(([name, icon]) => (
              <SkillsItem key={name}>{name}</SkillsItem>
            ))}
          </SkillsList>
        </SkillsSection>
        <SkillsSection>
          <SkillsTitle>Back-end</SkillsTitle>
          <SkillsList>
            {skills.back.map(([name, icon]) => (
              <SkillsItem key={name}>{name}</SkillsItem>
            ))}
          </SkillsList>
        </SkillsSection>
        <SkillsSection>
          <SkillsTitle>Other</SkillsTitle>
          <SkillsList>
            {skills.other.map(([name, icon]) => (
              <SkillsItem key={name}>{name}</SkillsItem>
            ))}
          </SkillsList>
        </SkillsSection>
      </Skills>
    </Container>
  );
};

export default About;
