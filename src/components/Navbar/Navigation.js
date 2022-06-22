// external modules
import {
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Badge } from "rsuite";
import styled from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { Modal } from "rsuite";
import { Button } from "rsuite";

// images
import logo from "../../images/logo.svg";

export const Navigation = () => {
  const { cart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const linkStyles = {
    textDecoration: "none",
    color: "black",
    marginRight: "10px",
    padding: "10px",
  };
  const ModalX = () => {
    return (
      <ModalContainer>
        <Modal
          backdrop={true}
          keyboard={false}
          open={open}
          onClose={handleClose}
          style={{ position: "fixed", right: "0", top: "50px" }}
          size="xs"
        >
          <Modal.Header>
            <Modal.Title>Cart Items</Modal.Title>
          </Modal.Header>
          {cart.length < 1 ? (
            <p>No cart Items</p>
          ) : (
            cart.map((item) => <Modal.Body>{item.title}</Modal.Body>)
          )}
          <Modal.Footer>
            <Button onClick={handleClose} appearance="primary">
              Ok
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </ModalContainer>
    );
  };

  const handleMouseOver = () => {
    handleOpen();
  };

  const handleMouseOut = () => {
    handleClose();
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <Nav>
        <Logo>
          <Image src={logo} alt="logo" />
        </Logo>
        <SearchSection>
          <input
            type="text"
            class="form-control"
            style={{ borderRadius: "0" }}
            placeholder="Search for products, brand, category or materials"
            aria-describedby="basic-addon2"
          />
          <span
            class="input-group-text"
            id="basic-addon2"
            style={{
              borderRadius: "0",
              backgroundColor: "black",
              border: "1px solid black",
            }}
          >
            <Search style={{ color: "white" }} />
          </span>
        </SearchSection>
        <Authentication>
          <AuthCont>
            <Account>
              <AccountCircleOutlined />
            </Account>
            <Link style={linkStyles} to="/login">
              My Account
            </Link>
          </AuthCont>
          <AuthCont>
            <Wishlist>
              <Badge content={4}>
                <FavoriteBorderOutlined />
              </Badge>
            </Wishlist>
            <Link style={linkStyles} to="/wishlist">
              My Wish
            </Link>
          </AuthCont>
          <AuthCont>
            <CartSection
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {open && <ModalX />}
              <Badge content={cart?.length}>
                <ShoppingBagOutlined />
              </Badge>
            </CartSection>
            <Link style={linkStyles} to="/cart">
              My Cart
            </Link>
          </AuthCont>
        </Authentication>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
const Nav = styled.div`
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  height: 100px;
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
`;
const Logo = styled.div`
  display: flex;
  flex: 1;
`;
const SearchSection = styled.div`
  display: flex;
  flex: 3;
`;
const Authentication = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;
`;
const Image = styled.img``;
const Account = styled.div`
  width: 50px;
  display: flex;
  height: 50px;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  /* border-radius: 5px; */
`;
const Wishlist = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  /* border-radius: 5px; */
`;
const CartSection = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  /* border-radius: 5px; */
`;
const AuthCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div``;
