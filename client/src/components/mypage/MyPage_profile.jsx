import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import stackIcons from "../../img/favicons-sprite16.png";

/** 마이페이지 Profile 전체 컨텐츠 */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  \ p {
    white-space: normal;
  }
`;
/** 마이페이지 Profile 왼쪽 컨텐츠 */
const LContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
/** 마이페이지 Profile 왼쪽 State컨텐츠  */
const Stats = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  > .title {
    font-size: 2em;
    font-weight: 400;
    padding-bottom: 0.6em;
    letter-spacing: -0.03em;
  }
`;

/** 마이페이지 왼쪽 StatContainer */
const StatContainer = styled.div`
  padding: 1.2em;
  box-sizing: border-box;
  border: 1px solid #d6d9dc;
  border-radius: 0.3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
/** 마이페이지 왼쪽 stats 개별 묶음*/
const StatDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 8px 0;
  flex-basis: calc(50% - 16px);
`;

/** 마이페이지 왼쪽 stats의 내용 숫자*/
const StatNum = styled.p`
  font-size: 1.6rem;
  padding-bottom: 0.2em;
`;
/** 마이페이지 왼쪽 stats의 내용 글자 */
const StatMsg = styled.p`
  font-size: 1.2em;
  color: #626a73;
`;

/** 마이페이지 Profile 왼쪽 Communities */
const Communities = styled(Stats)`
  > .edit {
  }
`;
/** 마이페이지 Profile 왼쪽 Communities */
const CmntMsg = styled.div`
  font-size: 1.2em;
  color: #626a73;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  > a {
    display: flex;
    flex-grow: 1;
    text-decoration: none;
    font-size: 1em;
    font-weight: 600;
    color: hsl(206, 100%, 40%);
  }
`;
/** 마이페이지 Profile 왼쪽 Communities 글자  */
const CmntMsgTxt = styled(CmntMsg)`
  margin-left: 80px;
  font-size: 1em;
`;
/** 마이페이지 Profile 왼쪽 Communities 스택오버플로우 로고  */
const CommuStack = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 16px 7038px;
  background-image: url(${stackIcons});
  background-position: 0 -6138px;
`;

/** 오른쪽 컨텐츠  */
const RContent = styled.div`
  flex-grow: 3;
  margin-left: 2em;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

/** 오른쪽 About 컨테이너 묶음  */
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;

  > .title {
    font-size: 2em;
    font-weight: 400;
    padding-bottom: 0.6em;
    letter-spacing: -0.03em;
    text-align: left;
  }
  > .about-content {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100px;
    padding: 3em;
    border: 1px solid #d6d9dc;
    border-radius: 0.3em;
    background-color: #f8f9f9;

    > .about-txt {
      font-size: 1.2em;
      color: #6a737c;
      text-align: center;
      line-height: 1.2em;
      letter-spacing: -0.01em;
      > .about-link {
        box-sizing: border-box;
        color: #0074cc;
        font-size: 1em;
        padding-left: 0.3em;
        font-weight: 500;
        text-decoration: none;
        &:hover {
          color: #0e95ff;
        }
      }
    }
  }
`;

/** 오른쪽 PostContainer 묶음  */
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    opacity: 0.5;
  }
  > .title {
    font-size: 2em;
    font-weight: 400;
    padding-bottom: 0.6em;
    letter-spacing: -0.03em;
    text-align: left;
  }
  > .posts-content {
    box-sizing: border-box;
    padding: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #d6d9dc;
    border-radius: 0.3em;
    background-color: #f8f9f9;

    > .post-item {
      box-sizing: border-box;
      padding: 0.5em;
      display: flex;
      background-color: white;
      height: 2.5em;
      align-items: center;
      font-size: 1.1em;
      width: 100%;

      border-bottom: 1px solid #d6d9dc;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      &:first-child:not(:last-child) {
        border-top-left-radius: 0.3em;
        border-top-right-radius: 0.3em;
      }
      &:last-child:not(:first-child) {
        border-bottom-left-radius: 0.3em;
        border-bottom-right-radius: 0.3em;
        border-bottom: 0;
      }
      > .post-idx {
        margin-left: 0.3em;
        margin-right: 0.7em;
      }
      > .post-title .post-link {
        color: #0075cc;
        &:hover {
          color: #0e95ff;
        }
      }
      > .post-data {
        display: flex;
        width: 5em;
        background-color: black;
      }
    }

    > .posts-txt {
      font-size: 1.2em;
      color: #6a737c;
      text-align: center;
      line-height: 1.5em;
      letter-spacing: -0.01em;
      white-space: normal;
      > .posts-icon {
        padding-bottom: 2em;
      }
      > .posts-txt-top {
        font-size: 1em;
        margin-bottom: 1em;
        white-space: normal;
      }
      > .posts-link {
        box-sizing: border-box;
        color: #0074cc;
        font-size: 1em;
        padding-left: 0.3em;
        font-weight: 500;
        display: inline-block;
        text-decoration: none;
        &:hover {
          color: #0e95ff;
        }
      }
    }
  }
`;
const Mypage_profile = () => {
  const [isAbout] = useState(false);
  const [isPost] = useState(false);

  return (
    <React.Fragment>
      <Container>
        <LContent>
          <Stats>
            <div className="title">Stats</div>
            <StatContainer>
              <StatDiv>
                <StatNum>{1}</StatNum>
                <StatMsg>reputation</StatMsg>
              </StatDiv>
              <StatDiv>
                <StatNum>{0}</StatNum>
                <StatMsg>reached</StatMsg>
              </StatDiv>
              <StatDiv>
                <StatNum>{0}</StatNum>
                <StatMsg>answers</StatMsg>
              </StatDiv>
              <StatDiv>
                <StatNum>{0}</StatNum>
                <StatMsg>questions</StatMsg>
              </StatDiv>
            </StatContainer>
          </Stats>
          <Communities>
            <div className="title">Communities</div>
            <StatContainer>
              <StatDiv>
                <CmntMsg>
                  <CommuStack />
                  <Link to="https://stackoverflow.com/users/21630755/">
                    Stack Overflow
                  </Link>
                  <CmntMsgTxt>{1}</CmntMsgTxt>
                </CmntMsg>
              </StatDiv>
            </StatContainer>
          </Communities>
        </LContent>
        <RContent>
          <AboutContainer>
            <div className="title">My Answers</div>
            <div className="about-content">
              {isAbout ? (
                <div>{}</div>
              ) : (
                <>
                  <div className="about-txt">
                    Your about me section is currently blank. Would you
                    <br /> like to add one?
                    <Link className="about-link" to="/edit">
                      Edit profile.
                    </Link>
                  </div>
                </>
              )}
            </div>
          </AboutContainer>

          <PostContainer>
            <div className="title">My questions</div>
            <div className="posts-content">
              {isPost ? (
                <div className="post-item">
                  포스트 게시물 api 가져와야하는곳
                </div>
              ) : (
                <div className="posts-txt">
                  <div className="posts-icon">
                    <svg
                      aria-hidden="true"
                      className="posts-icon"
                      width="196"
                      height="196"
                      viewBox="0 0 196 196"
                    >
                      <path
                        opacity=".07"
                        d="M35 177.5c-19.5-9-29.35-26.54-26-82 3.35-55.46 14.8-66.9 32.5-73 17.7-6.1 86.22-21.95 120 5.5s37.46 52.67 23 96.5c-14.46 43.84-22.26 63.24-60 61-11.4-.68-22.3-.85-32.5-1.02-23.56-.38-43.4-.7-57-6.98ZM33 42v26a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V42a7 7 0 0 0-7-7H40a7 7 0 0 0-7 7Zm7 39a7 7 0 0 0-7 7v27a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V88a7 7 0 0 0-7-7H40Z"
                      ></path>
                      <path
                        opacity=".2"
                        d="M42 48a4 4 0 0 1 4-4h112a7 7 0 0 1 7 7v23a7 7 0 0 1-7 7H49a7 7 0 0 1-7-7V48Zm0 47a4 4 0 0 1 4-4h112a7 7 0 0 1 7 7v22a7 7 0 0 1-7 7H49a7 7 0 0 1-7-7V95Zm-1 36h3.19a2 2 0 1 1 0 4H40a3 3 0 0 0-3 3v4.44a2 2 0 1 1-4 0V138a7 7 0 0 1 7-7h1Zm11.65 2c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.38a2 2 0 1 1 0 4H92.3a2 2 0 0 1-2-2Zm18.84 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2H153a7 7 0 0 1 7 7v4.44a2 2 0 1 1-4 0v-4.58a3 3 0 0 0-3-2.86h-4.19a2 2 0 0 1-2-2ZM35 151.56a2 2 0 0 1 2 2v4.51a3 3 0 0 0 3 2.93h4.19a2 2 0 1 1 0 4h-4.35a7 7 0 0 1-6.84-7v-4.44c0-1.1.9-2 2-2Zm123 0a2 2 0 0 1 2 2v4.74a7 7 0 0 1-7 6.69h-4.19a2 2 0 1 1 0-4h4.33a3 3 0 0 0 2.86-3v-4.43c0-1.1.9-2 2-2ZM52.65 163c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 1 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.38a2 2 0 1 1 0 4H92.3a2 2 0 0 1-2-2Zm18.84 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Zm18.83 0c0-1.1.9-2 2-2h8.37a2 2 0 0 1 0 4h-8.37a2 2 0 0 1-2-2Z"
                      ></path>
                      <path d="M124.48 14.24 120.25 10 116 14.24l4.24 4.25 4.25-4.25ZM52 58a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12-4c0-1.1.9-2 2-2h80a2 2 0 1 1 0 4H66a2 2 0 0 1-2-2ZM33 42a7 7 0 0 1 7-7h113a7 7 0 0 1 7 7v26a7 7 0 0 1-7 7H40a7 7 0 0 1-7-7V42Zm7-3a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h113a3 3 0 0 0 3-3V42a3 3 0 0 0-3-3H40Zm16 62a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm10-2a2 2 0 1 0 0 4h80a2 2 0 1 0 0-4H66ZM40 81a7 7 0 0 0-7 7v27a7 7 0 0 0 7 7h113a7 7 0 0 0 7-7V88a7 7 0 0 0-7-7H40Zm-3 7a3 3 0 0 1 3-3h113a3 3 0 0 1 3 3v27a3 3 0 0 1-3 3H40a3 3 0 0 1-3-3V88Zm150.97 54.49L179.5 134l-8.49 8.49 8.49 8.48 8.48-8.48Zm-8.48 2.82-2.83-2.82 2.83-2.83 2.82 2.83-2.82 2.82ZM8 97a2 2 0 0 1 2 2v4h4a2 2 0 1 1 0 4h-4v4a2 2 0 1 1-4 0v-4H2a2 2 0 1 1 0-4h4v-4c0-1.1.9-2 2-2Z"></path>
                    </svg>
                  </div>
                  <div className="posts-txt-top">
                    Just getting started? Try answering a question!
                  </div>
                  Your most helpful questions, answers and tags will appear
                  here. Start
                  <br /> by
                  <Link to="/posts" className="posts-link">
                    answering a question
                  </Link>
                  or
                  <Link to="/posts" className="posts-link">
                    selecting tags
                  </Link>
                  that match topics you’re <br /> interested in.
                </div>
              )}
            </div>
          </PostContainer>
        </RContent>
      </Container>
    </React.Fragment>
  );
};
export default Mypage_profile;
