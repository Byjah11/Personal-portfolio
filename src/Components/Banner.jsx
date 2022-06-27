import styled from "styled-components";
import { scrollTo } from "../utils/utils";

const Container = styled.div`
  height: calc(100vh - 64px);
  margin-top: 64px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
`;
const ScrollBtn = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  width: 30px;
  height: 60px;
  border: 2px solid #fff;
  border-radius: 25px;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    background-color: #fff;
    animation: move-down 2s infinite;
  }

  &::after {
    content: "Scroll Down";
    display: block;
    width: 200px;
    position: absolute;
    text-align: center;
    top: -10px;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.5s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  @keyframes move-down {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(30px);
      opacity: 0;
    }
  }
`;

const BannerText = styled.div``;
const Title = styled.h1`
  font-size: 3rem;

  span {
    color: var(--color-primary);
  }
`;
const Subtitle = styled.h2`
  font-size: 2rem;
  background: linear-gradient(
    225deg,
    #ff3cac,
    #784ba0,
    #2b86c5,
    #784ba0,
    #ff3cac
  );
  background-size: 400%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-bg-anim 10s linear infinite alternate;

  @keyframes text-bg-anim {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
`;

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <ScrollBtn onClick={() => scrollTo("about")} />
        <BannerText>
          <Title>
            Hi, I'm <span>Bartek</span>
          </Title>
          <Subtitle>I'm a Web Developer</Subtitle>
        </BannerText>
      </Wrapper>
    </Container>
  );
};

export default Banner;
