import React, { useContext, useState } from "react";
import styled from "styled-components";
import Select from "react-dropdown-select";

const Store = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const titleStyles = {
    textAlign: "center",
    fontSize: "18px",
  };
  const selectStyles = {
    margin: "10px",
    width: "200px",
    border: "none",
    fontSize: "18px",
  };
  const options = [
    { value: "Electronics", label: "Electronics" },
    { value: "Jewelery", label: "Jewelery" },
    { value: "Men's clothing", label: "Men's clothing" },
    { value: "Women's clothing", label: "Women's clothing" },
  ];
  const priceOptions = [
    { value: "high-low", label: "high-low" },
    { value: "low-high", label: "low-high" },
  ];
  const colorOptions = [
    { value: "Black", label: "Black" },
    { value: "Red", label: "Red" },
    { value: "Green", label: "Green" },
    { value: "Yellow", label: "Yellow" },
  ];

  return (
    <Container>
      <Wrapper>
        <Filters>
          <p style={titleStyles}>Filters</p>
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

          <p style={titleStyles}>Sort</p>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={priceOptions}
            style={selectStyles}
            placeholder="PRICE"
          />
        </Filters>
        <ProductsContainer>

        </ProductsContainer>
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
// const Select = styled.select`
//   width: 250px;
//   padding: 5px;
//   margin-bottom: 10px;
//   margin-left: 10px;
//   background-color: transparent;
//   border: none;
//   font-size: 18px;
//   font-weight: 200;
//   &::-ms-expand {
//     display: none;
//     outline: none;
//   }
//   &:active {
//     outline: none;
//   }
// `;
// const Option = styled.option`
//   background: white;
//   color: black;
//   &:checked {
//     background: black;
//   }
// `;
