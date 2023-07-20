import styled from "styled-components";
import ItemsList from "../Components/Items/ItemsList";
import { deviceSize } from "../constants";
import { useContext } from "react";
import { StoreContext } from "../Services/StoreProvider";

const ItemsPage = ({ category }) => {
  return (
    <StyledItemsPageWrapper>
      <StyledCategoryName>{category.presentationName}</StyledCategoryName>
      <ItemsList filterName={category.filterName}></ItemsList>
    </StyledItemsPageWrapper>
  );
};

const StyledCategoryName = styled.h1`
  color: #1a223e;
  font-family: Assistant;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 40px;
  @media (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
`;
const StyledItemsPageWrapper = styled.div`
  padding: 85px 24px 0px 24px;

  @media (max-width: ${deviceSize.mobile}px) {
    padding: 36px 16px 0px 16px;
  }
`;

export default ItemsPage;
