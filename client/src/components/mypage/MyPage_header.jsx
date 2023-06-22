import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoLogoStackoverflow } from "react-icons/io5";
import { faCakeCandles, faPen } from "@fortawesome/free-solid-svg-icons";
import { faClock, faCalendar } from "@fortawesome/free-regular-svg-icons";
import ProfileImage from "../../img/profile_img.png";
/**  상단 개인 프로필 전체 감싸는 컨테이너*/
const Container = styled.div`
  position: relative;
  margin-bottom: 16px;
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;
/**  프로필 이미지 */
const ProfileImg = styled.div`
  display: flex;
  img {
    width: 128px;
    height: 128px;
    border-radius: 5px;
  }
`;
/** 사용자 정보 묶음 */
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;
/** 사용자 이름 */
const UserName = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  > div {
    line-height: 1;
    font-size: 2.8em;
    margin: 4px;
    margin-bottom: 12px;
  }
`;
/** 사용자 로그 정보 묶음 ul */
const UserLogContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  margin-left: -4px;
  padding: 0;
  color: #6a737c;
`;
/** 사용자 로그 정보 li */
const UserLogList = styled.li`
  display: flex;
  align-items: center;
  margin: 4px;
  padding: 0;
  > div {
    margin: 0 2px 0 2px;
    font-size: 1.1em;
    font-weight: 500;
  }
`;
/** 프로필 아이콘 */
const Icon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2px 0 2px;
  > .icon-style {
    display: flex;
    align-items: center;
    width: 18px;
    height: 18px;
    margin: 0 2px 0 2px;
  }
`;
/** 상단 프로필의 버튼 컨테이너 */
const BtnContainer = styled.div`
  position: absolute;
  top: 0;
  right: -0.5em;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
`;
/** 상단 프로필의 개별 버튼 */
const ProfileHeaderBtn = styled.button`
  display: flex;
  justify-content: center;
  margin: 3px;
  padding: 0.8em;
  border: 1px solid #9fa6ad;
  border-radius: 3px;
  background-color: white;
  color: #6a737c;
  font-size: 12px;
  cursor: pointer;
  > .icon-style {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    vertical-align: center;
  }
`;
/** Profile 버튼 클릭시 나오는 숨겨진 박스 */
const BtnProfileDisable = styled.div`
  border: 1px solid #ccc;
  position: absolute;
  right: 4px;
  top: 44px;
  border-radius: 5px;
  background-color: #fff;
`;
/** 숨겨진 드롭다운 박스 Ul */
const DropDownUl = styled.ul`
  width: 100%;
  position: relative;
`;
/** 숨겨진 드롭다운 박스 Li */
const DropDownLi = styled.li`
  width: 154px;
  height: 29px;
  padding: 6px 12px;
  span {
    font-size: 12px;
  }
  a {
    color: #525960;
    display: flex;
    justify-content: left;
    text-decoration: none;
  }
  .dropIcon {
    font-size: 18px;
    margin-right: 4px;
  }
`;

// 마이페이지 상단 헤더부분 개인 프로필 컴포넌트 사용자 정보 api 받아와 이름, 로그값을 보여줘야함.
const Mypage_header = ({ user }) => {
  const logState = useSelector((state) => state.log);
  const [elapsedDay, setElapsedDay] = useState("?");
  if (logState === true) {
    let today = new Date();
    setElapsedDay(today);
  }
  const [profileMenu, setProfileMenu] = useState(false);
  const onClickDropBtn = () => {
    setProfileMenu(!profileMenu);
  };

  return (
    <React.Fragment>
      <Container>
        <Content>
          <ProfileImg>
            <Link to="/mypage/activity">
              <img
                id="profile_img"
                src={`${ProfileImage}`}
                aria-hidden
                alt="profile image"
              />
            </Link>
          </ProfileImg>
          <UserInfo>
            {logState ? (
              <UserName className="user_name">
                <div className="username">{user.data.name}</div>
              </UserName>
            ) : (
              <UserName>
                <div>사용자 이름</div>
              </UserName>
            )}

            <UserLogContainer>
              {logState ? (
                <UserLogList>
                  <Icon>
                    <FontAwesomeIcon
                      className="icon-style"
                      icon={faCakeCandles}
                    />
                  </Icon>
                  <div>Member for {elapsedDay} Days</div>
                </UserLogList>
              ) : (
                <UserLogList>
                  <Icon>
                    <FontAwesomeIcon
                      className="icon-style"
                      icon={faCakeCandles}
                    />
                  </Icon>
                  <div>Member for {setElapsedDay}Days</div>
                </UserLogList>
              )}
              <UserLogList>
                <Icon>
                  <FontAwesomeIcon className="icon-style" icon={faClock} />
                </Icon>
                <div>Last seen this week</div>
              </UserLogList>
              <UserLogList>
                <Icon>
                  <FontAwesomeIcon className="icon-style" icon={faCalendar} />
                </Icon>
                <div>Visited 4 days, 1 consecutive</div>
              </UserLogList>
            </UserLogContainer>
          </UserInfo>
          <BtnContainer>
            <Link to="/mypage/useredit">
              <ProfileHeaderBtn className="cursor">
                <FontAwesomeIcon className="icon-style" icon={faPen} />
                Edit profile
              </ProfileHeaderBtn>
            </Link>
            <ProfileHeaderBtn onClick={onClickDropBtn}>
              Profile
              <span className="dropDown">
                <MdOutlineArrowDropDown />
              </span>
            </ProfileHeaderBtn>
            {profileMenu ? (
              <BtnProfileDisable>
                <DropDownUl className="icon-style">
                  <DropDownLi>
                    <Link to="https://meta.stackoverflow.com/users/">
                      <IoLogoStackoverflow className="dropIcon" />
                      <span>Meta user</span>
                    </Link>
                  </DropDownLi>
                  <DropDownLi>
                    <Link to="https://meta.stackoverflow.com/users/">
                      <svg
                        aria-hidden="true"
                        className="dropIcon"
                        width="18"
                        height="18"
                      >
                        <path
                          d="M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H3Z"
                          fill="#8FD8F7"
                        ></path>
                        <path
                          d="M15 11H3c0 1.1.9 2 2 2h5v3l3-3a2 2 0 0 0 2-2Z"
                          fill="#155397"
                        ></path>
                        <path fill="#46A2D9" d="M3 5h12v2H3z"></path>
                        <path fill="#2D6DB5" d="M3 8h12v2H3z"></path>
                      </svg>
                      <span>NetWork profile</span>
                    </Link>
                  </DropDownLi>
                </DropDownUl>
              </BtnProfileDisable>
            ) : null}
          </BtnContainer>
        </Content>
      </Container>
    </React.Fragment>
  );
};
export default Mypage_header;
