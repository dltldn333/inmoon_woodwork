import { ReactComponent as Logo } from "./img/svg/logo.svg";
import { ReactComponent as Hamburger } from "./img/svg/hamburger.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";

function Navigation(dark) {
  const [navColor, setNavColor] = useState("#fff");

  return (
    <Nav>
      <Log color={navColor} />
      <NavList color={navColor}>
        <NavMenu>소개</NavMenu>
        <NavMenu>교육-체험 프로그램</NavMenu>
        <NavMenu>외주-주문 제작</NavMenu>
        <NavMenu>제품 구매</NavMenu>
        <NavMenu>게시판</NavMenu>
      </NavList>
      <Hamburg color={navColor} />
    </Nav>
  );
}

const Nav = styled.nav`
  z-index: 999;
  position: absolute;
  width: 100%;
  padding: 2.083333% 3.645833%;
  padding-bottom: 1.041666%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border-bottom: 1px solid #000;
`;

const Hamburg = styled(Hamburger)`
  fill: ${(props) => props.color};
`;

const Log = styled(Logo)`
  fill: ${(props) => props.color};
`;

const NavList = styled.ul`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  padding-inline-start: 0;
  margin: 0;
  li {
    color: ${(props) => props.color};
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const NavMenu = styled.li`
  list-style: none;
  display: inline;
  margin: 0 1.041666%;
  font-family: "NotoSans";
  font-weight: 500;
  font-size: 18px;
`;

export default Navigation;
