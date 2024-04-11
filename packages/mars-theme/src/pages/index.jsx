import React from "react";
import { styled } from "frontity";
import cover from "../img/IMG_4826.jpg";

export function HomePage(props) {
  return (
    <Container>
      <Title>Welcome to Frontity!</Title>
      <StyledImage alt={"cover"} src={cover} width={"100%"} height={"100%"} />
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

const StyledImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
