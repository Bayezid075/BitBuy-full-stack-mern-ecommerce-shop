import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60vh;
  background: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 25px;
  font-size: 18px;
  font-weight: 600;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background: teal;
  color: white;
`;

export default function NewsLatter() {
  return (
    <Container>
      <Title> NEWSLATTER</Title>
      <Description> Get update from your favorite Product ! </Description>
      <InputContainer>
        <Input placeholder="Your Email " />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}
