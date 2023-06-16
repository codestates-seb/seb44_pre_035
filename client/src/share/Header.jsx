import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../img/logo.svg";
import burger from "../img/burger.svg";
import search from "../img/search.svg";
import Nav from "./Nav";

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 56px;
  border-top: 3px solid #f48224;
  border-bottom: 1px solid #c8ccd0;
`;

const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Adjusted",
    "Segoe UI", "Liberation Sans", sans-serif;
`;

const Burger = styled.div`
  position: relative;
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f1f2f3;
  }
`;

const Logo = styled(Link)`
  height: 100%;
  padding: 0 8px;
  display: flex;
  align-items: center;

  img {
    width: 150px;
    height: 30px;
  }

  &:hover {
    background-color: #f1f2f3;
  }
`;

const Form = styled.form`
  padding: 0 8px;
  position: relative;
  flex: 1;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;

  filter: invert(46%) sepia(15%) saturate(303%) hue-rotate(171deg)
    brightness(92%) contrast(90%);
`;

const SearchInput = styled.input`
  display: block;
  padding: 8px;
  padding-left: 32px;
  width: 100%;
  outline: none;
  border: 1px solid #babfc4; // --black-200
  border-radius: 3px;

  &:focus {
    border-color: #6bbbf7;
    box-shadow: 0 0 0 4px #ebf4fb;
  }
`;

const Buttons = styled.div`
  width: fit-content;
  padding-right: 12px;
`;

const ButtonList = styled.ol`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`; // Link로 바꾸기

const ButtonItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;

  &:first-child a {
    background-color: #e1ecf4; // --powder-100
    color: #39739e; // --powder-700
    border: 1px solid #39739e;

    &:hover {
      background-color: #b3d3ea;
    }
  }

  &:not(:first-child) {
    margin-left: 5px;
  }
`;

const ButtonLink = styled(Link)`
  padding: 8px 10.4px;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: #0995ff; // --powder-100
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.6);
  color: #fff;

  &:hover {
    background-color: #0162bf;
  }
`;

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 임시 로그인
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderContent>
        {!isLoggedIn && (
          <Burger onClick={() => setIsOpenNav((prev) => !prev)}>
            <img src={burger} alt="burger" />
            {isOpenNav && <Nav />}
          </Burger>
        )}
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        <Form>
          <SearchIcon src={search} alt="search" />
          <SearchInput />
        </Form>
        <Buttons>
          {isLoggedIn ? (
            <ButtonList>
              <ButtonItem onClick={() => setIsLoggedIn(false)}>
                <ButtonLink>Log out</ButtonLink>
              </ButtonItem>
            </ButtonList>
          ) : (
            <ButtonList>
              <ButtonItem onClick={() => setIsLoggedIn(true)}>
                <ButtonLink>Log in</ButtonLink>
              </ButtonItem>
              <ButtonItem>
                <ButtonLink to="/signup">Sign up</ButtonLink>
              </ButtonItem>
            </ButtonList>
          )}
        </Buttons>
      </HeaderContent>
    </HeaderWrapper>
  );
}
