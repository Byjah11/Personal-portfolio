import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

//icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faArrowUpRightFromSquare, faPhone, faEnvelope);

const Container = styled.div``;

const Section = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1260px;
  margin: 32px auto;
`;

const SectionTitle = styled.h1`
  border-left: 4px solid var(--color-primary);
  padding: 0 16px;
  margin-bottom: 16px;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Section id="about">
        <SectionTitle>About Me</SectionTitle>
        <About />
      </Section>
      <Section id="projects">
        <SectionTitle>My Projects</SectionTitle>
        <Projects />
      </Section>
      <Section id="contact">
        <SectionTitle>Contact</SectionTitle>
        <Contact />
      </Section>
    </Container>
  );
};

export default App;
