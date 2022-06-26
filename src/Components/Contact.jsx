import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 3rem;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 16px;
  padding: 8px;
  font-size: 1.2rem;
  border-radius: 8px;
`;
const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  margin-bottom: 16px;
  padding: 8px;
  min-height: 300px;

  border-radius: 8px;
  font-size: 1.2rem;
`;
const Button = styled.button`
  width: 100%;
  padding: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  transition: all 250ms ease;
  background-color: var(--color-primary);
  color: #fff;

  &:hover {
    background-color: #a85cd2;
  }

  &:active {
    background-color: #4a0f6a;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send");
  };
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
            <span>barnowacki@wp.pl</span>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon="fa-phone" />
            <span>+48 535 890 920</span>
          </ContactItem>
        </ContactList>
      </Left>
      <Right>
        <Form onSubmit={handleSubmit}>
          <Input required type="text" placeholder="Your Name" />
          <Input required type="email" placeholder="Your Email" />
          <TextArea required placeholder="Message" />
          <Button type="submit">SEND</Button>
        </Form>
      </Right>
    </Container>
  );
};

export default Contact;
