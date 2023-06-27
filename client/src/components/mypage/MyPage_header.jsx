/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { faClock, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { getUsers } from "../../api/userAPI";
import { getNickname, getProfile } from "../../profile/getRandomAccount";

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
    font-size: 1.3em;
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
    font-size: 0.8em;
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

// 마이페이지 상단 헤더부분 개인 프로필 컴포넌트 사용자 정보 api 받아와 이름, 로그값을 보여줘야함.
const Mypage_header = () => {
  const logState = useSelector((state) => state.log);
  const [elapsedDay, setElapsedDay] = useState("?");
  if (logState === true) {
    let today = new Date();
    setElapsedDay(today);
  }

  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);
  return (
    <React.Fragment>
      <Container>
        <Content>
          <ProfileImg>
            <Link to="/mypage/activity">
              {users.length > 0 && ( // Check if users array has at least one element
                <img
                  id="profile_img"
                  src={getProfile()} // Use optional chaining (?.) to handle undefined/null values
                  aria-hidden
                  alt="profile image"
                />
              )}
            </Link>
          </ProfileImg>
          <UserInfo>
            {logState ? (
              <UserName className="user_name">
                <div className="username">{getNickname()}</div>
              </UserName>
            ) : (
              <UserName>
                <div>{users[0]?.nickname}</div>
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
        </Content>
      </Container>
    </React.Fragment>
  );
};
export default Mypage_header;
