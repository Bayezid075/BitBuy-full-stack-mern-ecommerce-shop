import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  margin: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px;
  padding: 15px;
  font-size: 18px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  background: teal;
  margin: auto;
  color: white;
  font-size: 20px;
`;

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title> Create Your Account </Title>
        <Form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Input type="text" placeholder="Confirm Password" />

          <Button> Create Account </Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
