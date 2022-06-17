import {
  FavoriteBorderOutlined,
  LocalMallOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext/CartContext";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    const cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    if (cartItems.find((item) => item.id === product.id)) {
      return cartItems;
    } else {
      cartItems?.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCart(cartItems);
  };

  console.log(cart);

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={product.image} alt="product" />
      </ImageWrapper>
      {/* <Hr /> */}
      <Info>
        <Content>{product.category.toUpperCase()}</Content>
        <Content>{product.title.slice(0, 40)}</Content>
        <Price>
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Price>
      </Info>
      <ButtonWrapper>
        <LocalMallOutlined onClick={() => handleAddToCart(product)} />
        <FavoriteBorderOutlined />
        <VisibilityOutlined />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ProductCard;

const Wrapper = styled.div`
  width: 250px;
  height: 450px;
  border: 3px solid rgb(237, 241, 255);
  margin: 10px;
`;
const ImageWrapper = styled.div`
  width: 200px;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Hr = styled.hr`
  border: 1px solid black;
`;
const Content = styled.p`
  padding-left: 10px;
`;
const Price = styled.p`
  padding-left: 10px;
  color: red;
  font-weight: bold;
  font-size: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
