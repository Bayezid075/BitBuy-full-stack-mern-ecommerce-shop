import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Anouncment from "../components/Anouncement";
import NewsLatter from "../components/NewsLatter";
import Footer from "../components/Footer";
import Product from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  ${mobile({ textAlign: "center" })}
`;
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
  ${mobile({ fontSize: "15px" })}
`;
const Select = styled.select`
  padding: 5px 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 2px" })}
`;
const Option = styled.option``;

export default function ProductList() {
  const location = useLocation();
  const catg = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleChange = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);

  return (
    <Container>
      <Anouncment />
      <Navbar />
      <Title> Dresses </Title>
      <FilterContainer>
        <Filter>
          <FilterText> Filter Product : </FilterText>
          <Select name="color" onChange={handleChange}>
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
          <Select name="size" onChange={handleChange}>
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
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option selected> Newest </Option>
            <Option value="Ase"> Price (Asc) </Option>
            <Option value="Dese"> Price (Desc) </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product cat={catg} filters={filters} sort={sort} />
      <NewsLatter />
      <Footer />
    </Container>
  );
}
