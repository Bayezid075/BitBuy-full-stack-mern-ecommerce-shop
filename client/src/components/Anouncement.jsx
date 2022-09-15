import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  text-align: center;
  background: teal;
  color: white;
`;

export default function Anouncement() {
  return (
    <Container>
      এখন - সারা বাংলাদেশে আকিজ বিড়ি মাত্র ১৫ টাকা প্যাকেট! এছাড়াও কোনো শিপিং
      চার্জ নেই{" "}
    </Container>
  );
}
