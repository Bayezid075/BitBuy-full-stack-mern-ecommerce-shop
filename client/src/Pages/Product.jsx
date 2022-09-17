import React from "react";
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLatter from "../components/NewsLatter";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin: 50px;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
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
  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title> Denim Jumpsuit </Title>
          <Dscs>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            magni quae consectetur inventore, voluptatum iste, cum laborum nobis
            perspiciatis velit, harum quam quo autem enim cumque animi deleniti
            ut saepe rem maiores repudiandae facilis. Hic.
          </Dscs>
          <Price> $20 </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color : </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="green" />
              <FilterColor color="darkblue" />
            </Filter>
            <Filter>
              <FilterTitle> Size : </FilterTitle>
              <SizeFilter>
                {" "}
                <SizeFilterOption> S </SizeFilterOption>
                <SizeFilterOption> M </SizeFilterOption>
                <SizeFilterOption> L </SizeFilterOption>
                <SizeFilterOption> XL </SizeFilterOption>
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
