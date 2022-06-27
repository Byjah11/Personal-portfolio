import styled from "styled-components";
import { device } from "../utils/breakpoints";
import { scrollTo } from "../utils/utils";

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
  width: calc(100% - 32px);
  max-width: 1260px;
  margin: auto;
  @media ${device.tablet} {
    width: calc(100% - 64px);
  }
`;
const Left = styled.div``;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  display: none;

  span {
    color: var(--color-primary);
  }

  @media ${device.tablet} {
    display: block;
  }
`;
const LogoMobile = styled.div`
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;

  span {
    color: var(--color-primary);
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const Right = styled.div``;
const NavLinks = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
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
    background: var(--color-primary);
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
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoMobile
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            b<span>.</span>n
          </LogoMobile>
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
