import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 64px);
  margin-top: 64px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1260px;
  margin: auto;
  display: flex;
  align-items: center;
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
  color: var(--color-primary);
`;

const Banner = () => {
  return (
    <Container>
      <Wrapper>
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
