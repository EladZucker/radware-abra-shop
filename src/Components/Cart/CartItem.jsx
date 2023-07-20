import styled from "styled-components";
import closeButton from "../../assets/close.png";
import { deviceSize } from "../../constants";
const CartItem = ({
  name,
  price,
  image,
  quantity,
  onRemoveItem,
  onReduce,
  onAdd,
}) => {
  return (
    <>
      <StyledCartItemWrapper>
        <StyledCartItemImage src={image}></StyledCartItemImage>
        <StyledCartItemDetailsWrapper>
          <StyledCartItemTitle>{name}</StyledCartItemTitle>
          <StyledCartItemPrice>{price} ILS</StyledCartItemPrice>
          <StyledCartItemQuantity>
            <StyledQuantity onClick={onReduce}>-</StyledQuantity>
            <StyledQuantity>{quantity}</StyledQuantity>
            <StyledQuantity onClick={onAdd}>+</StyledQuantity>
          </StyledCartItemQuantity>
        </StyledCartItemDetailsWrapper>
        <StyledDeleteButtonImage
          onClick={onRemoveItem}
          src={closeButton}
        ></StyledDeleteButtonImage>
      </StyledCartItemWrapper>
    </>
  );
};

const StyledCartItemWrapper = styled.div`
  font-family: Assitant;
  display: flex;
  gap: 11px;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px; /* 100% */
  color: #808285;
  position: relative;

  @media (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
    font-size: 16px;
    line-height: 16px; /* 100% */
  }
`;

const StyledCartItemImage = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: ${deviceSize.mobile}px) {
    width: 125px;
    height: 125px;
  }
`;
const StyledCartItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: ${deviceSize.mobile}px) {
  }
`;
const StyledCartItemTitle = styled.span`
  color: #000;
  font-family: Assistant;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */
`;
const StyledCartItemPrice = styled.span`
  font-family: Assistant;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */
`;
const StyledCartItemQuantity = styled.div`
  font-family: Assistant;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */
`;
const StyledQuantity = styled.span`
  padding-right: 5px;
`;
const StyledDeleteButtonImage = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
  @media (max-width: ${deviceSize.mobile}px) {
    top: 8px;
    right: 8px;
  }
`;

export default CartItem;
