import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Products({ cat, filters, sort }) {
  console.log(cat, filters, sort);
  const [product, setProduct] = useState([]);
  const [fiteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/product?category=${cat}`
            : "http://localhost:5000/api/product"
        );
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProduct(
        product.filter((item) =>
          Object.entries(filters).every((key, value) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, setFilteredProduct, product]);

  return (
    <Container>
      {fiteredProduct.map((item) => (
        <Product Item={item} />
      ))}
    </Container>
  );
}
