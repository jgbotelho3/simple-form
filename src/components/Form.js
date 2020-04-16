import React from "react";
import Container from "../styles/Container";
import Title from "../styles/Title";
import Paragraph from "../styles/Paragraph";

export default function () {
  return (
    <>
      <Container direction="row">
        <Container
          width="50%"
          bg="#fff"
          align="start"
          justify="center"
          padding="4rem"
        >
          <Title>Learn to code by <br />watching others</Title>
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
      </Container>
    </>
  );
}
