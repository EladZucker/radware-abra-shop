import styled from "styled-components";
import Button from "../Components/Common/Button";
import CartItems from "../Components/Cart/CartItems";
import EmptyCart from "../Components/Cart/EmptyCart";
import { deviceSize } from "../constants";
const CartPage = () => {
  const isCartEmpty = false;
  const sum = 101;
  return (
    <StyledCartWrapper>
      <CartItemsWrapper>
        <StyledCartTitle>My cart</StyledCartTitle>
        {isCartEmpty ? (
          <EmptyCart />
        ) : (
          <>
            <CartItems cart={undefined}></CartItems>
            <StyledCheckoutWrapper>
              <StyledTotalWrapper>
                <StyledSubtotal>SubTotal</StyledSubtotal>
                <StyledSubtotalPrice>{sum}</StyledSubtotalPrice>
              </StyledTotalWrapper>
              <StyledCheckoutButton>CHECKOUT</StyledCheckoutButton>
            </StyledCheckoutWrapper>
          </>
        )}
      </CartItemsWrapper>
    </StyledCartWrapper>
  );
};

const StyledCartWrapper = styled.div`
  flex-basis: 316px;
  min-width: 316px;
  background: #fff;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 40px 24px 0px 24px;
  font-family: Assistant;
  font-weight: 700;
  @media (max-width: ${deviceSize.mobile}px) {
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
    min-height: 393px;
    flex-basis: 393px;
    padding-top: 24px;
  }
`;
const CartItemsWrapper = styled.div``;
const StyledCartTitle = styled.h1`
  font-size: 40px;
  @media (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
    text-align: center;
  }
`;
const StyledCheckoutWrapper = styled.div``;
const StyledTotalWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  color: #000;
  font-family: Assistant;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
`;
const StyledSubtotal = styled.span``;
const StyledSubtotalPrice = styled.span``;
const StyledCheckoutButton = styled(Button)``;
export default CartPage;
