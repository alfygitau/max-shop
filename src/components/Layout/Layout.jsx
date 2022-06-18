// functional imports
import { Outlet } from "react-router-dom";
import { Announcement } from "../Announcement/Announcement";
import { Navigation } from "../Navbar/Navigation";
import { Tabs } from "../Tabs/Tabs";

// styled
import styled from "styled-components";

export const Layout = () => {
  return (
    <Wrapper>
      <Announcement />
      <Navigation />
      <Tabs />
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const Container = styled.div`
  height: 100vh;
`;
