import styled from "styled-components";
import CartItem from "./CartItem";
import { deviceSize } from "../../constants";
import { useContext } from "react";
import { StoreContext } from "../../Services/StoreProvider";

const CartItems = () => {
  const { cart, addItemToCart, removeItemFromCart } = useContext(StoreContext);
  return (
    <StyledCartItemsWrapper>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          quantity={item.quantity}
          name={item.name}
          price={item.price}
          onRemoveItem={() => {
            removeItemFromCart(item, true);
          }}
          onAdd={() => {
            addItemToCart(item);
          }}
          onReduce={() => {
            removeItemFromCart(item);
          }}
        />
      ))}
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
