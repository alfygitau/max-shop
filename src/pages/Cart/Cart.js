import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

import styled from "styled-components";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((ac, cv) => ac + cv.price, 0);
  return (
    <Wrapper>
      <Container>
        <CartItems>
          <Header>
            <ImageWrapper>
              <p>IMAGE(s)</p>
            </ImageWrapper>
            <Title>
              <p>TITLE(s)</p>
            </Title>
            <Quantity>
              <p>QUANTITY(s)</p>
            </Quantity>
            <Options>
              <p>PRICE</p>
            </Options>
          </Header>
          {cart.length < 1 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item) => (
              <Data>
                <>
                  <CartImage>
                    <img
                      src={item.image}
                      alt="product"
                      height="100"
                      width="100"
                      style={{ objectFit: "contain" }}
                    />
                  </CartImage>
                  <CartTitle>
                    <p>{item.title}</p>
                  </CartTitle>
                  <CartQuantity>
                    <p>1</p>
                  </CartQuantity>
                  <CartPrice>
                    <p>
                      {item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                  </CartPrice>
                </>
              </Data>
            ))
          )}
        </CartItems>
        <Summary>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Cart Summary
          </p>

          <Content>
            {cart.map((item) => (
              <CartInfo>
                <p>{item.title}</p>
                <p>
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </CartInfo>
            ))}
          </Content>
          <Total>
            <strong>Cart Total: </strong>{" "}
            {total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Total>
        </Summary>
      </Container>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;
const Container = styled.div`
  width: 90%;
  margin: auto;
  height: fit-content;
  margin-top: 20px;
  display: flex;
  gap: 2em;
`;
const CartItems = styled.div`
  display: flex;
  flex: 7;
  height: fit-content;
  border: 1px solid black;
  flex-direction: column;
  gap: 1em;
`;
const Summary = styled.div`
  display: flex;
  flex: 3;
  height: 70vh;
  border: 1px solid black;
  gap: 1em;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex: 1;
  /* border-top: 1px solid black; */
  gap: 0.5em;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;
const Data = styled.div`
  display: flex;
  flex: 9;
  /* border: 1px solid black; */
  gap: 0.5em;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  border: 1px solid black;
`;
const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  border: 1px solid black;
`;
const Quantity = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  border: 1px solid black;
`;
const Options = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  border: 1px solid black;
`;
const CartImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  /* border: 1px solid black; */
`;
const CartTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  /* border: 1px solid black; */
`;
const CartQuantity = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  /* border: 1px solid black; */
`;
const CartPrice = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  /* border: 1px solid black; */
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const CartInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
`;
const Total = styled.span`
  padding: 5px 15px;
  font-size: 20px;
`;
