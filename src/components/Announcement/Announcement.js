import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Announcement = () => {
  const linkStyles = {
    textDecoration: "none",
    marginRight: "10px",
    color: "black"
  };

  return (
    <Container>
      <Wrapper>
        <Welcome>Welcome to DeliverX!</Welcome>
        <Options>
          <NavLink style={linkStyles} to="/store">
            STORE
          </NavLink>
          <NavLink style={linkStyles} to="/newsletter">
            NEWSLETTER
          </NavLink>
          <NavLink style={linkStyles} to="/faq">
            FAQ
          </NavLink>
          <NavLink style={linkStyles} to="/language">
            ENGLISH
          </NavLink>
          <NavLink style={linkStyles} to="/currency">
            CURRENCY
          </NavLink>
        </Options>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 40px;
  width: 100%;
  border-bottom: 1px solid black;
`;
const Wrapper = styled.div`
  height: 40px;
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  
`;
const Welcome = styled.div`
  display: flex;
  flex: 1;
`;
const Options = styled.div`
  display: flex;
  flex: 4;
  justify-content: flex-end;
`;
