import styled from "styled-components";
import LogoImage from "../../assets/logo.png";
import AccountImage from "../../assets/account_circle.png";
import Menu from "../Common/Menu";
import { deviceSize } from "../../constants";
const Header = () => {
  const menuItems = [
    { id: 1, name: "Best Sellers" },
    { id: 2, name: "Clothing " },
    { id: 3, name: "Home" },
    { id: 4, name: "Office" },
    { id: 5, name: "Sports" },
  ];
  return (
    <StyledHeaderWrapper>
      <StyledLogo src={LogoImage}></StyledLogo>
      <StyledMenu
        menuItems={menuItems}
        maxMobileResolution={deviceSize.mobile}
      ></StyledMenu>
      <StyledAccountIcon src={AccountImage}></StyledAccountIcon>
    </StyledHeaderWrapper>
  );
};

const StyledHeaderWrapper = styled.header`
  display: flex;
  padding: 21px 0px 21px 64px;
  background: #1a223e;
  height: 72px;
  align-items: center;
`;

const StyledLogo = styled.img`
  padding-right: 98px;
`;

const StyledMenu = styled(Menu)`
  @media (max-width: ${deviceSize.mobile}px) {
    order: -1;
    padding-right: 66px;
  }
`;

const StyledAccountIcon = styled.img`
  margin-left: auto;
  padding-right: 24px;
  @media (max-width: 1024px) {
    padding-right: 18px;
  }
`;

export default Header;
