import styled from "styled-components";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  background-color: #111111cc;
  backdrop-filter: blur(20px);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1260px;
  margin: auto;
`;
const Left = styled.div``;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;

  span {
    color: var(--color-primary);
  }
`;

const Right = styled.div``;
const NavLinks = styled.div`
  display: flex;
`;
const NavLink = styled.div`
  margin-left: 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  padding: 8px 16px;

  &::before {
    content: "";
    width: 0;
    height: 100%;
    background-color: var(--color-primary);
    position: absolute;
    z-index: -1;
    opacity: 0;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    opacity: 1;
  }
`;

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    const yOffset = -62;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            bartek<span>.</span>nowacki
          </Logo>
        </Left>
        <Right>
          <NavLinks>
            <NavLink onClick={() => scrollTo("about")}>About</NavLink>
            <NavLink onClick={() => scrollTo("projects")}>Projects</NavLink>
            <NavLink onClick={() => scrollTo("contact")}>Contact</NavLink>
          </NavLinks>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
