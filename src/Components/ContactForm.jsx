import styled from "styled-components";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  transition: all 250ms ease;
  background: ${(p) =>
    p.sending ? "var(--gradient)" : "var(--color-primary)"};
  color: #fff;
  background-size: 500%;
  animation: text-bg-anim 2s linear infinite;

  &:hover {
    background: ${(p) =>
      p.disabled ? (p.sending ? "var(--gradient)" : "#4a0f6a") : "#5e3bd1"};
    background-size: 500%;
  }

  @keyframes text-bg-anim {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }

  &:active {
    background-color: #4a0f6a;
  }
`;

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const getBtnMsg = () => {
    if (sending) {
      return "SENDING...";
    } else if (error) {
      return "Something went wrong...";
    } else if (sent) {
      return "THANK YOU!";
    } else {
      return "SEND";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "gmail",
        "personal_portfolio",
        form.current,
        "HMIzCK2XOqHNlZMVi"
      )
      .then(
        (result) => {
          e.target.reset();
          setSending(false);
          setError(false);
          setSent(true);
          setTimeout(() => {
            setSent(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setSending(false);
          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={handleSubmit}>
      <Input required type="text" placeholder="Your Name" name="name" />
      <Input required type="email" placeholder="Your Email" name="email" />
      <TextArea required placeholder="Message" name="message" />
      <Button type="submit" disabled={sending || error} sending={sending}>
        {getBtnMsg()}
      </Button>
    </Form>
  );
};

export default ContactForm;
