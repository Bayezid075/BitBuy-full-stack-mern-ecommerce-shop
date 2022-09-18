import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  text-align: center;
  background: teal;
  color: white;
  padding: 5px;
  ${mobile({ fontSize: "10px" })}
`;

export default function Anouncement() {
  return (
    <Container>এখন - সারা বাংলাদেশে আকিজ বিড়ি মাত্র ১৫ টাকা প্যাকেট!</Container>
  );
}
