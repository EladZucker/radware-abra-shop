import styled from "styled-components";
import LogoImage from "../../assets/logo.png";
import AccountImage from "../../assets/account_circle.png";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledLogo></StyledLogo>
      <StyledMenu></StyledMenu>
      <StyledAccountIcon></StyledAccountIcon>
    </StyledHeaderWrapper>
  );
};

const StyledHeaderWrapper = styled.header``;

const StyledLogo = styled.img``;

const StyledMenu = styled.div``;
const StyledAccountIcon = styled.img``;

export default Header;
