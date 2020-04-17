import React, { useState } from "react";
import Container from "../styles/Container";
import Title from "../styles/Title";
import Paragraph from "../styles/Paragraph";
import Button from "../styles/Button";
import FormContainer from "../styles/FormContainer";
import Input from "../styles/Input";
import Link from "../styles/Link";
import Img from "../styles/Img";
import imgError from "../assets/icon-error.svg";

export default function () {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !lastname || !email || !password) {
      setError(true);
    } else {
      setName("");
      setLastname("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <>
      <Container direction="row">
        <Container width="50%" align="start" justify="center" padding="4rem">
          <Title>
            Learn to code by <br />
            watching others
          </Title>
          <Paragraph>
            See how experienced developers solve problems in real-time.
          </Paragraph>
          <Paragraph>
            Watching scripted tutorials is great, but understanding how
            developers think is invaluable.
          </Paragraph>
          <Paragraph>
            Try it free 7 days then $20/mo. thereafter First Name Last Name
            Email Address Password Claim your free trial By clicking the button,
            you are agreeing to our Terms and Services
          </Paragraph>
        </Container>
        <Container width="50%" align="start" justify="top" padding="4rem">
          <Button margin="1rem auto" width="90%" color="hsl(248, 32%, 49%)">
            <strong>Try it free 7 days</strong>
          </Button>
          <FormContainer onSubmit={handleSubmit}>
            <Container height="50px" direction="row">
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name"
              ></Input>
              {error && <Img src={imgError} alt="Error logo" />}
            </Container>

            <Container height="50px" direction="row">
              <Input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Last Name"
              ></Input>
              {error && <Img src={imgError} alt="Error logo" />}
            </Container>

            <Container height="50px" direction="row">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              ></Input>
              {error && <Img src={imgError} alt="Error logo" />}
            </Container>

            <Container height="50px" direction="row">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              ></Input>
              {error && <Img src={imgError} alt="Error logo" />}
            </Container>

            <Button margin="1rem auto" width="90%" marginBottom="0.5rem">
              <strong>Claim your free trial</strong>
            </Button>
            <Paragraph margin="0 auto" fontColor="hsl(246, 25%, 77%)">
              By clicking the button you are agreening with our
              <Link href="/">Terms and services</Link>
            </Paragraph>
          </FormContainer>
        </Container>
      </Container>
    </>
  );
}
