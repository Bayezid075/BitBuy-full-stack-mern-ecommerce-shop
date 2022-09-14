import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const MenuItem = styled.div`
  font-size: 14 px;
  cursor: pointer;
  margin-left: 25px;
`;
const Searchbar = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 25px;
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          {" "}
          <Language> EN</Language>{" "}
          <Searchbar>
            <Input type="search" />
            <Search style={{ color: "grey", fontSize: 16 }} />{" "}
          </Searchbar>
        </Left>{" "}
        <Center>
          {" "}
          <Logo> BitBuy. </Logo>{" "}
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
