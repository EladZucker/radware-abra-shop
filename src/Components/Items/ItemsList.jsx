import styled from "styled-components";
import ItemCard from "./ItemCard";
import { deviceSize } from "../../constants";
import { useContext } from "react";
import { StoreContext } from "../../Services/StoreProvider";

const ItemsList = () => {
  const { cart, items, addItemToCart } = useContext(StoreContext);

  console.log(items);
  return (
    <ItemsListWrapper>
      {items.map((item) => {
        const cartItem = cart.find((element) => element.id === item.id);

        const calculatedQuantity = cartItem
          ? item.quantity - cartItem.quantity
          : item.quantity;
        return (
          <ItemCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            quantity={calculatedQuantity}
            onAddToBag={() => addItemToCart(item)}
          />
        );
      })}
    </ItemsListWrapper>
  );
};

const ItemsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px 24px;
  margin-bottom: 105px;

  @media (max-width: ${deviceSize.mobile}px) {
    gap: 20px 18px;
    margin-bottom: 89px;
  }
`;
export default ItemsList;
