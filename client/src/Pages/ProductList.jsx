import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncment from "../components/Anouncement";
import NewsLatter from "../components/NewsLatter";
import Footer from "../components/Footer";
import Product from "../components/Products";

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 5px 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

export default function ProductList() {
  return (
    <Container>
      <Anouncment />
      <Navbar />
      <Title> Dresses </Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Product : </FilterText>
          <Select>
            <Option disabled selected>
              {" "}
              Color{" "}
            </Option>
            <Option> Black </Option>
            <Option> Green </Option>
            <Option> Red </Option>
            <Option> Yellow </Option>
            <Option> Blue </Option>
            <Option> Teal </Option>
          </Select>
          <Select>
            <Option disabled selected>
              {" "}
              Size{" "}
            </Option>
            <Option> S </Option>
            <Option> M </Option>
            <Option> L </Option>
            <Option> XL </Option>
            <Option> XXL </Option>
            <Option> XXXL </Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Product : </FilterText>
          <Select>
            <Option selected> Newest </Option>
            <Option> Price (Asc) </Option>
            <Option> Price (Dsc) </Option>
            <Option> L </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product />
      <NewsLatter />
      <Footer />
    </Container>
  );
}
