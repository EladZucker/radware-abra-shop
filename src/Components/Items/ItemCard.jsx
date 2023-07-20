import styled from "styled-components";
import Button from "../Common/Button";
import { deviceSize } from "../../constants";

const ItemCard = ({ image, name, price, quantity, onAddToBag }) => {
  return (
    <>
      <StyledItemWrapper>
        <StyledItemImage src={image}></StyledItemImage>
        <StyledItemName>{name}</StyledItemName>
        <StyledItemPrice>{price} ILS</StyledItemPrice>
        <StyledAddToBagButton onClick={onAddToBag}>
          ADD TO BAG
        </StyledAddToBagButton>
      </StyledItemWrapper>
    </>
  );
};

const StyledItemWrapper = styled.div`
  width: 292px;
  font-family: Assistant;
  font-size: 20px;
  text-align: center;

  @media (max-width: ${deviceSize.mobile}px) {
    width: 160px;
    font-size: 16px;
  }
`;

const StyledItemImage = styled.img`
  width: 292px;
  height: 292px;
  margin-bottom: 16px;

  @media (max-width: ${deviceSize.mobile}px) {
    width: 160px;
    height: 160px;
  }
`;

const StyledItemName = styled.span`
  display: block;
`;
const StyledItemPrice = styled.span`
  display: block;
  color: #808285;
  margin-top: 8px;
  margin-bottom: 16px;
`;
const StyledAddToBagButton = styled(Button)``;
export default ItemCard;
