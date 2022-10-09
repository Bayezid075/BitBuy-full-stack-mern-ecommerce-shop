import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
`;
const Status = styled.h1`
  margin: 20 0px;
`;

export default function PaymentScf() {
  return (
    <Container>
      <Status>Payment Successfull 😍</Status>
      <Link to="/"> Back to Home </Link>
    </Container>
  );
}
