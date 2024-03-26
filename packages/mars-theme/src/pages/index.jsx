import React from "react";
import { styled } from "frontity";

export function HomePage(props) {
  return (
    <Container>
      <Title>Welcome to Frontity!</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;
