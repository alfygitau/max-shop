import React, { useContext, useState } from "react";
import styled from "styled-components";
import Select from "react-dropdown-select";
import { ProductsListContext } from "../../contexts/ProductsListContext/ProductsListContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Pagination } from "@mui/material";
import { PhonesContext } from "../../contexts/Phones/PhonesContext";

const Store = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { products } = useContext(ProductsListContext);
  const { phones } = useContext(PhonesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage1, setCurrentPage1] = useState(1);
  const [productsPerPage] = useState(4);
  const [phonesPerPage] = useState(4);
  const count = products.length / productsPerPage;
  const count1 = phones.length / phonesPerPage;

  const titleStyles = {
    textAlign: "center",
    fontSize: "15px",
  };
  const selectStyles = {
    margin: "10px",
    width: "220px",
    fontSize: "18px",
  };
  const options = [
    { value: "Electronics", label: "Electronics" },
    { value: "Jewelery", label: "Jewelery" },
    { value: "Men's clothing", label: "Men's clothing" },
    { value: "Women's clothing", label: "Women's clothing" },
  ];
  const priceOptions = [
    { value: "High-low", label: "High-low" },
    { value: "Low-high", label: "Low-high" },
  ];
  const colorOptions = [
    { value: "Black", label: "Black" },
    { value: "Red", label: "Red" },
    { value: "Green", label: "Green" },
    { value: "Yellow", label: "Yellow" },
  ];

  // get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const indexOfLastPhone = currentPage * phonesPerPage;
  const indexOfFirstPhone = indexOfLastPhone - phonesPerPage;
  const currentPhones = phones.slice(indexOfFirstPhone, indexOfLastPhone);

  const handleChange = (event, value) => {
    setCurrentPage(value);
    setCurrentPage1(value)
  };
  

  return (
    <Container>
      <Wrapper>
        <Filters>
          <p style={titleStyles}>FILTERS</p>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            style={selectStyles}
            placeholder="CATEGORIES"
          />

          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={colorOptions}
            style={selectStyles}
            placeholder="COLOR"
          />

          <p style={titleStyles}>SORT</p>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={priceOptions}
            style={selectStyles}
            placeholder="PRICE"
          />
        </Filters>
        <ProductsWrapper>
          <ProductsContainer>
            {currentProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
            <Pagination
              count={count}
              variant="outlined"
              shape="rounded"
              style={{ marginBottom: "20px" }}
              page={currentPage}
              onChange={handleChange}
            />
          </ProductsContainer>
          <ProductsContainer>
            {currentPhones.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
            <Pagination
              count={count1}
              variant="outlined"
              shape="rounded"
              style={{ marginBottom: "20px" }}
              page={currentPage1}
              onChange={handleChange}
            />
          </ProductsContainer>
        </ProductsWrapper>
      </Wrapper>
    </Container>
  );
};

export default Store;
const Container = styled.div`
  width: 100%;
  height: fit-content;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  height: fit-content;
  display: flex;
  /* border: 1px solid black; */
  gap: 1em;
  margin-top: 20px;
`;
const Filters = styled.div`
  display: flex;
  flex: 2;
  border: 1px solid black;
  flex-direction: column;
  align-items: center;
  height: 60vh;
`;
const ProductsContainer = styled.div`
  display: flex;
  border: 1px solid black;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: center;
`;
const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 8;
  height: fit-content;
  gap: 2em;
  margin-bottom: 20px;
`;
