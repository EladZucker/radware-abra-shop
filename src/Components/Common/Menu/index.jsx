/* eslint-disable react/prop-types */
import styled from "styled-components";
import HamburgerIcon from "../../../assets/menu.png";
import useMedia from "../../../Hooks/useMedia";

const Menu = ({ className, maxMobileResolution = 400 }) => {
  const breakPoints = [
    { min: 0, max: maxMobileResolution, name: "mobile" },
    { min: maxMobileResolution + 1, max: 10000, name: "desktop" },
  ];

  const currentBreakpoint = useMedia(breakPoints);
  console.log(currentBreakpoint);

  return (
    <MenuWrapper className={className}>
      {currentBreakpoint?.name === "mobile" && (
        <>
          <Hamburger src={HamburgerIcon}></Hamburger>
        </>
      )}
      {currentBreakpoint?.name === "desktop" && (
        <>
          <MenuItem href="#">Best Sellers</MenuItem>
          <MenuItem href="#"> Clothing</MenuItem>
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#">Office</MenuItem>
          <MenuItem href="#">Sports</MenuItem>
        </>
      )}
    </MenuWrapper>
  );
};

const Hamburger = styled.img`
  cursor: pointer;
`;
const MenuWrapper = styled.nav`
  color: #fff;
  display: flex;
  font-family: Assistant;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  gap: 26px;
`;

const MenuItem = styled.a`
  text-decoration: None;
  color: #fff;
`;

export default Menu;
