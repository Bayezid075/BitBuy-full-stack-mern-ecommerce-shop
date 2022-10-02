import React from "react";
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLatter from "../components/NewsLatter";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { publicReq } from "../requestMethod";
import axios from "axios";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40%" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1``;
const Dscs = styled.div`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
`;
const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
`;
const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 30%;
  background: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: 1px solid grey;
`;

const SizeFilter = styled.select`
  margin-left: 15px;
`;
const SizeFilterOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
  margin: 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  font-weight: 700;
  background: white;
  cursor: pointer;
  &:hover {
    background: teal;
    color: white;
  }
`;

export default function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicReq.get("product/" + id);
        setProduct(res.data);
        console.log(res.data);
        console.log(product);
      } catch {}
    };
    getProduct();
  }, [id]);
  const blg = {
    title: "hello world",
    dscs: "welcome back another code",
    img: "https://images.pexels.com/photos/9444009/pexels-photo-9444009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    color: ["black", "red"],
    size: ["L", "XL"],
  };

  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Dscs>{product.dscs} </Dscs>
          <Price> </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color : </FilterTitle>
              {product.color.map((c) => (
                <FilterColor key={c} color={c} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle> Size : </FilterTitle>
              <SizeFilter>
                {" "}
                {product.size.map((sz) => (
                  <SizeFilterOption key={sz}> {sz} </SizeFilterOption>
                ))}
              </SizeFilter>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount> 1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLatter />
      <Footer />
    </Container>
  );
}
