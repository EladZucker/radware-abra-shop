/* eslint-disable react/prop-types */
import styled from "styled-components";
import LogoImage from "../../../assets/logo-black.png";
import closeImage from "../../../assets/x-icon.png";
import logoutImage from "../../../assets/logout.png";

const DrawerMenu = ({ menuItems, onClose }) => {
  return (
    <>
      <DrawerMenuWrapper>
        <StyledLogo src={LogoImage} alt="Logo" />
        <StyledCloseButton
          onClick={onClose}
          src={closeImage}
          alt="Close button"
        ></StyledCloseButton>
      </DrawerMenuWrapper>
      <StyledMenuItemsWrapper>
        {menuItems.map((item) => (
          <StyledMenuItem
            href={item.url}
            key={item.id}
            onClick={() => {
              onClose();
            }}
          >
            {item.name}
          </StyledMenuItem>
        ))}
      </StyledMenuItemsWrapper>
      <StyledLogoutWrapper>
        <img src={logoutImage} alt="Logout" />
        <StyledLogutText>Log out</StyledLogutText>
      </StyledLogoutWrapper>
    </>
  );
};

const StyledLogo = styled.img`
  align-self: center;
`;
const StyledLogutText = styled.span`
  margin-left: 4px;
`;

const StyledLogoutWrapper = styled.div`
  position: absolute;
  bottom: 41px;
  left: 18px;
  font-family: Assistant;
  font-size: 16px;
  font-weight: 500;
  color: #808285;
  display: flex;
`;
const StyledMenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 51px;
  margin-left: 18px;
  gap: 26px;
`;
const DrawerMenuWrapper = styled.div`
  padding-left: 18px;
  padding-top: 20px;
  display: flex;
`;

const StyledCloseButton = styled.img`
  margin-left: auto;
  padding-right: 16px;
  cursor: pointer;
`;

const StyledMenuItem = styled.a`
  font-family: Assistant;
  font-size: 20px;
  font-weight: normal;
  color: #1a223e;
  padding-left: 4px;
  text-decoration: none;
  &.active {
    border-left: 2px solid #1a223e;
    font-weight: 600;
  }
`;
export default DrawerMenu;
