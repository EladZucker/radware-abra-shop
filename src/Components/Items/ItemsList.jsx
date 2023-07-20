import styled from "styled-components";
import ItemCard from "./ItemCard";
import { deviceSize } from "../../constants";
const ItemsList = () => {
  return (
    <ItemsListWrapper>
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/tshirt.png"
        name="White Mouse Pad"
        price="57"
        quantity={5}
      ></ItemCard>
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/tshirt.png"
        name="White Mouse Pad"
        price="57"
        quantity={5}
      ></ItemCard>
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/tshirt.png"
        name="White Mouse Pad"
        price="57"
        quantity={5}
      ></ItemCard>
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/tshirt.png"
        name="White Mouse Pad"
        price="57"
        quantity={5}
      ></ItemCard>
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/tshirt.png"
        name="White Mouse Pad"
        price="57"
        quantity={5}
      ></ItemCard>
      <ItemCard
        image="https://elad-test-1.s3.amazonaws.com/tshirt.png"
        name="White Mouse Pad"
        price="57"
        quantity={5}
      ></ItemCard>
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
