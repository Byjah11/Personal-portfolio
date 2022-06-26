import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 62px;
`;

const Title = styled.h3`
  span {
    color: var(--color-primary);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  padding-right: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: all 0.5s ease;
`;

const OverlayTitle = styled.h1`
  font-size: 3rem;
  opacity: 0;
  transform: translate(0, -50%);
  transition: all 0.5s ease;
`;
const OverlayDesc = styled.div`
  opacity: 0;
  transform: translate(0, 50%);
  transition: all 0.5s ease;
  a {
    color: inherit;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  aspect-ratio: 2/1;
  margin: 16px 0;
  overflow: hidden;
  border-radius: 16px;
  &:hover ${ImageOverlay} {
    opacity: 1;
  }
  &:hover ${OverlayTitle}, &:hover ${OverlayDesc} {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const Image = styled.img`
  height: 100%;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoTitle = styled.h4`
  color: #666;
  margin-bottom: 8px;
`;
const TechList = styled.div`
  display: flex;
`;
const TechItem = styled.div`
  margin-right: 8px;
  font-size: 1.2rem;
  background-color: var(--color-primary);
  color: #fff;
  font-weight: 600;
  padding: 4px 8px;
`;
const InfoLinks = styled.div`
  display: flex;
`;
const InfoLink = styled.a`
  margin-left: 8px;
  text-decoration: none;
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 10px;
  cursor: pointer;
  span {
    margin-left: 8px;
  }
  &:hover {
    color: var(--color-primary);
  }
`;

const Project = ({ p }) => {
  return (
    <Container>
      <Title>
        <span>0{p.id}.</span>
        {p.title}
      </Title>
      <ImageContainer>
        <Image src={`/assets/imgs/${p.img}`} />
        <ImageOverlay>
          <OverlayTitle>{p.title}</OverlayTitle>
          <OverlayDesc>
            {p.id === 1 && (
              <a href="https://www.x-kom.pl/" target="_blank">
                X-kom
              </a>
            )}
            {p.desc}
          </OverlayDesc>
        </ImageOverlay>
      </ImageContainer>
      <Info>
        <div>
          <InfoTitle>{"// Technologies used"}</InfoTitle>
          <TechList>
            {p.tech.map((t) => (
              <TechItem key={t}>{t}</TechItem>
            ))}
          </TechList>
        </div>
        <InfoLinks>
          <InfoLink href={p.live} target="_blank">
            <FontAwesomeIcon icon="arrow-up-right-from-square" />
            <span>See it live</span>
          </InfoLink>
          <InfoLink href={p.source} target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-github" />
            <span>Source Code</span>
          </InfoLink>
        </InfoLinks>
      </Info>
    </Container>
  );
};

export default Project;