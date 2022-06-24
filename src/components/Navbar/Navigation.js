// external modules
import {
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Badge } from "rsuite";
import styled from "styled-components";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { Modal } from "rsuite";
import { Button } from "rsuite";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { ProductsListContext } from "../../contexts/ProductsListContext/ProductsListContext";

// images
import logo from "../../images/logo.svg";

export const Navigation = () => {
  const { cart } = useContext(CartContext);
  const { products: items } = useContext(ProductsListContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  const handleClose = () => {
    setOpen((prevState) => !prevState);
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
            cart.map((item) => <Modal.Body>{item.name}</Modal.Body>)
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
  };

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          category: {item.category}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          Title: {item.title}
        </span>
      </>
    );
  };

  return (
    <Wrapper>
      <Nav>
        <Logo>
          <Image src={logo} alt="logo" />
        </Logo>
        <SearchSection>
          <div style={{ width: 650 }}>
            <ReactSearchAutocomplete
              items={items}
              fuseOptions={{ keys: ["title", "category"] }} // Search on both fields
              resultStringKeyName="title"
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
              styling={{
                height: "40px",
                border: "1px solid black",
                borderRadius: "4px",
                backgroundColor: "white",
                boxShadow: "none",
                color: "black",
                fontSize: "16px",
                iconColor: "black",
                clearIconMargin: "3px 8px 0 0",
                zIndex: 2,
              }}
            />
          </div>
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
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
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
