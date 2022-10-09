import React from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Key =
  "pk_test_51LkeaoBVjbun3NsUNKDvMoyCiJEzibqBZUABEq7c1o93WhBmJOUCQcEptXSa08trYlWmpXaPjqEu5B2wuGLF9fzW00RSU1yiBJ";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  text-align: center;
`;
const PayButt = styled.button`
  padding: 10px 60px;
  background: teal;
  color: white;
  margin-bottom: 20px;
  font-size: 25px;
  cursor: pointer;
  border: none;
`;
const Status = styled.h3``;

export default function Pay() {
  const [stripeToken, setStripeToken] = useState(null);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/payment", {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, [stripeToken]);

  const onToken = (token) => {
    // console.log(token);
  };

  return (
    <Container>
      <StripeCheckout
        name="BitBuy"
        image="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
        billingAddress
        shippingAddress
        description="your total $20"
        amount={2000}
        token={onToken}
        stripeKey={Key}
      >
        <PayButt> Pay Now </PayButt>
      </StripeCheckout>
      <Status> Its very pleasure to us that you want buy from us ✔</Status>
    </Container>
  );
}
