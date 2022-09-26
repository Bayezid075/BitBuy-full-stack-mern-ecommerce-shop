import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 10px" })}
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
  ${mobile({ justifyContent: "center" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
  font-weight: 800;
  ${mobile({ fontSize: "24px" })}
`;
const MenuItem = styled.div`
  font-size: 14 px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
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
            <Input type="search" placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16 }} />{" "}
          </Searchbar>
        </Left>{" "}
        <Center>
          {" "}
          <Link to="/">
            <Logo>BitBuy.</Logo>{" "}
          </Link>{" "}
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>{" "}
          </Link>
          <Link to="/login">
            <MenuItem>LOGIN</MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>{" "}
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
