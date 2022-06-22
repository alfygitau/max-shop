import React, { useContext } from "react";
import { SelectPicker } from "rsuite";
import styled from "styled-components";
import { CategoriesContext } from "../../contexts/CategoriesContext/CategoriesContext";

const Store = () => {
  const titleStyles = {
    textAlign: "center",
    fontSize: "18px",
  };

  const { categories } = useContext(CategoriesContext);
  console.log(categories);
  return (
    <Container>
      <Wrapper>
        <Filters>
          <p style={titleStyles}>Filters</p>
          <Select name="category-filters" id="category-filters">
            {categories.map((category) => (
              <Option key={category} value="categories">
                {category.toUpperCase()}
              </Option>
            ))}
          </Select>

          <Select name="color-filters" id="color-filters">
            <Option value="categories" seleceted>
              Filter By Color
            </Option>
          </Select>
          <p style={titleStyles}>Sort</p>
          <Select name="sort" id="sort">
            <Option value="price">Price</Option>
            <Option value="ascending">Ascending</Option>
            <Option value="descending">Descending</Option>
          </Select>
        </Filters>
        <ProductsContainer></ProductsContainer>
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
  height: 60vh;
  margin-top: 20px;
`;
const Filters = styled.div`
  display: flex;
  flex: 2;
  border: 1px solid black;
  flex-direction: column;
`;
const ProductsContainer = styled.div`
  display: flex;
  flex: 8;
  border: 1px solid black;
`;
const Select = styled.select`
  width: 250px;
  padding: 5px;
  margin-bottom: 10px;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: 200;
  &::-ms-expand {
    display: none;
    outline: none;
  }
  &:active {
    outline: none;
  }
`;
const Option = styled.option`
  background: white;
  color: black;
  &:checked {
    background: black;
  }
`;
