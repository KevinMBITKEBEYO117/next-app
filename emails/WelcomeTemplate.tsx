import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import React, { CSSProperties } from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text style={heading}>Hello {name}</Text>
            <Link href="https://google.com">GOOGLE BROWSER</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
