import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header";
import ItemsPage from "./Pages/ItemsPage";
import CartPage from "./Pages/CartsPage";
import { deviceSize } from "./constants";
function App() {
  return (
    <StyledMainWrapper>
      <Header></Header>
      <StyledContentWrapper>
        <ItemsPage
          category={{
            presentationName: "Best Seller",
            filterName: "best-seller",
          }}
        ></ItemsPage>
        <CartPage></CartPage>
      </StyledContentWrapper>
    </StyledMainWrapper>
  );
}

export const StyledMainWrapper = styled.main``;
export const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

export default App;
