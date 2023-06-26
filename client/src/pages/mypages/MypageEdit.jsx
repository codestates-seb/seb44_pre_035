import React, { useState } from "react";
import styled from "styled-components";
import MyPage_header from "../../components/mypage/MyPage_header";
import MyPage_menu from "../../components/mypage/MyPage_menu";
import Mypage_setNav from "../../components/mypage/MyPage_Nav";
import WmdBurtton from "../../img/wmd-buttons.svg";
import { getProfile } from "../../profile/getRandomAccount";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 135%;
  max-width: 1554px;
  margin: 5 auto;
  white-space: normal;
`;

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const MainContainer = styled.div`
  display: flex;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  text-align: left;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d6d9dc;
`;
const H1 = styled.h1`
  font-weight: 500;
  margin: 0px;
  font-size: 1.5em;
  line-height: calc(15 / 13);
`;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 1.2em;
  line-height: 1.3;
  margin: 0px 0px 8px 0px;
  > .titleSpan {
    margin-left: 10px;
    font-size: 1.2rem;
    color: hsl(210, 8%, 45%);
  }
`;

const SubTitle = styled.div``;

const SetList = styled.div`
  padding: 24px;
  margin-bottom: 48px;
  border: 1px solid #e3e6e8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const ListCompoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 12px 0px 12px 0px;
  img {
    width: 164px;
    height: 164px;
    border-radius: 4px;
  }
  .linkWrap {
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    padding: 24px;
    gap: 16px;
  }
`;

const ListCompoTitle = styled.div`
  font-weight: bold;
  font-size: 1.1em;
  padding: 4px;
`;

const Label = styled.label`
  width: 100%;
  > div {
    margin: 2px 0 2px 0;
  }
  > input {
    width: 100%;
    border: 1px solid hsl(210, 8%, 85%);
    border-radius: 3px;
    max-width: 421.33px;
    min-height: 32.59px;
    padding: 7.8px 9.1px 7.8px 9.1px;
  }
  .wmd-container {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    border-radius: 3px;
  }
  .wmd-button-bar {
    clear: both;
    background-color: transparent;
    margin: 10px 0 0 0;
    padding: 0;
    width: 100%;
    border: 1px solid #ccc;
    border-bottom: 0;
    min-height: 44px;
    overflow: hidden;
    z-index: 2;
    position: relative;
  }
  .btr-sm {
    border-top-left-radius: 3px !important;
    border-top-right-radius: 3px !important;
    border-radius: 0 0 3px 3px;
  }
  .wmd-button-row {
    padding: 0 4px 0 8px;
    margin: 0;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 44px;
    border-bottom: 1px solid #ccc;
    > .wmd-button {
      max-width: 28px;
      height: 44px;
      flex: 10 0 23px;
      padding: 0;
      padding: 12px 0 0 0;
      text-align: center;
      cursor: pointer;
    }
    > .wmd-button > span {
      background-image: url(${WmdBurtton});
      width: 20px;
      height: 20px;
      background-size: initial !important;

      display: inline-block;
    }
    .wmd-spacer {
      height: 44px;
      flex: 1 0 4px;
      max-width: 27px;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      position: relative;
      left: 4px;
    }
    .wmd-spacer-max {
      max-width: none;
    }
  }
  textarea {
    padding: 10px;
    margin: -1px 0 0;
    height: 200px;
    line-height: 1.3;
    width: 100%;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    border-top: 1px solid #ccc;
    border-radius: 0 0 3px 3px;
    resize: vertical;
  }
  .user-page .grippie {
    margin-bottom: 3px;
  }
  .grippie {
    margin-top: -4px;
  }
  .grippie {
    border: 1px solid #ddd;
    border-width: 0 1px 1px;
    cursor: s-resize;
    height: 14px;
    overflow: hidden;
    background-color: #bbb;
    border-radius: 0 0 3px 3px;
  }
`;
const BtnDiv = styled.div`
  margin-bottom: 48px;
  padding: 10px 0 15px 0;
  display: flex;
  gap: 13px;
`;

const SubmitBtn = styled.button`
  padding: 10.4px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 1em;
  background-color: #0a95ff;
  color: white;
  box-shadow: hsla(0, 0%, 100%, 0.4);
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #0074cc;
  }
`;

const CancelBtn = styled(SubmitBtn)`
  background-color: transparent;
  color: #0a95ff;
  :hover {
    background-color: hsl(206, 100%, 97%);
  }
`;

const EditProfile = () => {
  const [displayName, setDisplayName] = useState("이름");

  return (
    <React.Fragment>
      <MainDiv>
        <Container>
          <Content>
            <MyPage_header />
            <MyPage_menu />
            <MainContainer>
              <Mypage_setNav />
              <Main>
                <Title>
                  <H1>Edit your Profile</H1>
                </Title>
                <SubTitle>
                  <H3>Public information</H3>
                  <SetList>
                    <ListCompoDiv>
                      <Label htmlFor="change-picture">
                        <ListCompoTitle>Profile image</ListCompoTitle>
                        <div>
                          <img
                            id="my_profile_img"
                            src={getProfile()}
                            alt="my profile img"
                          />
                        </div>
                      </Label>
                    </ListCompoDiv>
                    <ListCompoDiv>
                      <Label>
                        <ListCompoTitle>Display name</ListCompoTitle>
                        <input
                          onChange={(e) => setDisplayName(e.target.value)}
                          value={displayName}
                        />
                      </Label>
                    </ListCompoDiv>
                    <ListCompoDiv>
                      <Label>
                        <ListCompoTitle>Password</ListCompoTitle>
                        <input />
                      </Label>
                    </ListCompoDiv>
                    <ListCompoDiv>
                      <Label>
                        <ListCompoTitle>Change Password</ListCompoTitle>
                        <input />
                      </Label>
                    </ListCompoDiv>
                  </SetList>
                </SubTitle>

                <BtnDiv>
                  <SubmitBtn onClick={(e) => setDisplayName(e.target.value)}>
                    Save Profile
                  </SubmitBtn>
                  <CancelBtn onClick={(e) => setDisplayName(e.target.value)}>
                    Cancel
                  </CancelBtn>
                </BtnDiv>
              </Main>
            </MainContainer>
          </Content>
        </Container>
      </MainDiv>
    </React.Fragment>
  );
};

export default EditProfile;
