import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from "../utils/breakpoints";
import ContactForm from "./ContactForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
const ContactList = styled.div``;
const ContactItem = styled.div`
  font-size: 1.6rem;
  margin-top: 16px;
  span {
    margin-left: 16px;
  }
`;

const Socials = styled.div`
  font-size: 3rem;
  display: flex;
`;
const SocialsItem = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 3rem;
`;

const Contact = () => {
  return (
    <Container>
      <Left>
        <Title>Send me a message!</Title>
        <ContactList>
          <Socials>
            <SocialsItem href="https://github.com/Byjah11" target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </SocialsItem>
          </Socials>
          <ContactItem>
            <FontAwesomeIcon icon="fa-envelope" />
            <span>bknowacki@gmail.com</span>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon="fa-phone" />
            <span>+48 535 890 920</span>
          </ContactItem>
        </ContactList>
      </Left>
      <Right>
        <ContactForm />
      </Right>
    </Container>
  );
};

export default Contact;
