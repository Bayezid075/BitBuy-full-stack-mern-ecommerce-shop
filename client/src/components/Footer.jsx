import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 30px;
`;
const Logo = styled.h1`
  flex: 1;
`;
const Dscs = styled.p`
  flex: 1;
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocalIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo> BitBuy.</Logo>
        <Dscs>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
          ipsa consectetur architecto at cupiditate eligendi inventore dolorum
          amet, vero adipisci distinctio, ipsum harum sunt laudantium esse rerum
          maxime quia modi?{" "}
        </Dscs>
        <SocialContainer>
          <SocalIcon color="#3b5999">
            <Facebook />
          </SocalIcon>
          <SocalIcon color="#E4405F">
            <Instagram />
          </SocalIcon>
          <SocalIcon color="#E60023">
            <Pinterest />
          </SocalIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Usefull Links </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Login</ListItem>
        </List>
      </Center>
      <Right>
        <Title> Contact </Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          1800 Manikganj, Dhaka, Bangladesh
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +8801728181464
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@bitbuy.com{" "}
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
