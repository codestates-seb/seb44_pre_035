import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
/**  마이페이지(setting) 좌측 nav 묶음 */
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
  min-width: 90px;
`;
/**  마이페이지(setting) 좌측 nav ul */
const MyPageMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0px;
  padding: 0px;
  font-size: 0.7rem;

  a {
    text-decoration: none;
    color: hsl(210, 8%, 35%);
  }
  #active {
    background-color: #f48225;
    display: flex;
    border-radius: 50px;

    color: white;
    font-weight: 600;
    &:hover {
      background-color: #af6122;
    }
  }
`;
/**  마이페이지(setting) 좌측 nav li */
const MyPageMenuLi = styled.li`
  color: hsl(210, 8%, 35%);
  line-height: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px;
  padding: 6px 12px 6px 12px;
  border-radius: 50px;
  font-size: 1.2em;

  &.title {
    font-size: 1em;
    margin-top: 16px;
    font-weight: bold;
    color: black;
    &.first {
      margin-top: 0px;
    }
  }
  &.item {
    font-weight: 500;

    &:not(.active):hover {
      background-color: #e3e6e8;
    }
  }
`;
/**  마이페이지(setting) 좌측 nav ul 묶음 */
const Mypage_setNav = () => {
  let location = useLocation().pathname;
  location = location.slice(8);
  return (
    <React.Fragment>
      <Content>
        <MyPageMenuUl>
          <MyPageMenuLi className="title first">
            PERSONAL INFORMATION
          </MyPageMenuLi>
          <Link to="/mypage/useredit">
            {location === "useredit" ? (
              <MyPageMenuLi id="active" className="item">
                Edit profile
              </MyPageMenuLi>
            ) : (
              <MyPageMenuLi className="item">Edit profile</MyPageMenuLi>
            )}
          </Link>
          <Link to="/mypage/userdelete">
            {location === "userdelete" ? (
              <MyPageMenuLi id="active" className="item">
                Delete profile
              </MyPageMenuLi>
            ) : (
              <MyPageMenuLi className="item">Delete profile</MyPageMenuLi>
            )}
          </Link>

          <MyPageMenuLi className="title">EMAIL SETTINGS</MyPageMenuLi>
          <MyPageMenuLi className="item">Edit email settings</MyPageMenuLi>
          <MyPageMenuLi className="item">Tag watching & ignoring</MyPageMenuLi>
          <MyPageMenuLi className="item">community digests</MyPageMenuLi>
          <MyPageMenuLi className="item">Question subscriptions</MyPageMenuLi>
          <MyPageMenuLi className="title">SITE SETTINGS</MyPageMenuLi>
          <Link to="/mypage/setting">
            {location === "setting" ? (
              <MyPageMenuLi id="active" className="item">
                Preferences
              </MyPageMenuLi>
            ) : (
              <MyPageMenuLi className="item">Preferences</MyPageMenuLi>
            )}
          </Link>
          <MyPageMenuLi className="item">Flair</MyPageMenuLi>
          <MyPageMenuLi className="item">Hide communities</MyPageMenuLi>
          <MyPageMenuLi className="title">ACCESS</MyPageMenuLi>
          <MyPageMenuLi className="item">Your Collectives</MyPageMenuLi>
          <MyPageMenuLi className="item">Your logins</MyPageMenuLi>
          <MyPageMenuLi className="title">API</MyPageMenuLi>
          <MyPageMenuLi className="item">Authorized applications</MyPageMenuLi>
        </MyPageMenuUl>
      </Content>
    </React.Fragment>
  );
};

export default Mypage_setNav;
