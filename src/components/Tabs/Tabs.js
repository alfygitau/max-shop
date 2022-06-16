import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Tabs = () => {
  const linkStyles = {
    textDecoration: "none",
    color: "white",
    paddingRight: "30px"
  };

  return (
    <Wrapper>
      <TabSection>
        <NavLink style={linkStyles} to="/">
          Home
        </NavLink>
        <NavLink style={linkStyles} to="/">
          Store
        </NavLink>
        <NavLink style={linkStyles} to="/">
          Popular Products
        </NavLink>
        <NavLink style={linkStyles} to="/">
          Top Sales
        </NavLink>
        <NavLink style={linkStyles} to="/">
          Top Rated Products
        </NavLink>
        <NavLink style={linkStyles} to="/">
          All Products
        </NavLink>
        <NavLink style={linkStyles} to="/">
          About
        </NavLink>
        <NavLink style={linkStyles} to="/">
          Contact
        </NavLink>
      </TabSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: black;
`;
const TabSection = styled.div`
  width: 90%;
  margin: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
