import styled from "styled-components";
import CartItem from "./CartItem";
import { deviceSize } from "../../constants";

const CartItems = () => {
  const cart = [];
  return (
    <StyledCartItemsWrapper>
      <CartItem
        name="Black T-shirt"
        price="89"
        image="https://elad-test-1.s3.amazonaws.com/tshirt.png"
        quantity={5}
      ></CartItem>
      <CartItem
        name="Black T-shirt"
        price="89"
        image="https://elad-test-1.s3.amazonaws.com/tshirt.png"
        quantity={5}
      ></CartItem>

      <CartItem
        name="Black T-shirt"
        price="89"
        image="https://elad-test-1.s3.amazonaws.com/tshirt.png"
        quantity={5}
      ></CartItem>
      <CartItem
        name="Black T-shirt"
        price="89"
        image="https://elad-test-1.s3.amazonaws.com/tshirt.png"
        quantity={5}
      ></CartItem>
    </StyledCartItemsWrapper>
  );
};

const StyledCartItemsWrapper = styled.div`
  display: flex;
  gap 24px;
  flex-direction: column;
  overflow-y: auto;
  @media (max-width: ${deviceSize.mobile}px) {
    flex-direction: row;
    gap: 18px;
    overflow-x: auto;
    overflow-y: hidden;

  }
`;
export default CartItems;
