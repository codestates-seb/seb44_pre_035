import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyPage_header from "../../components/mypage/MyPage_header";
import MyPage_menu from "../../components/mypage/MyPage_menu";
import Mypage_setNav from "../../components/mypage/MyPage_Nav";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/mypage/logSlice";
import { deleteData } from "../../features/mypage/userDataSlice";
import ModalComponet from "../../share/Modal";
import axios from "axios";
/**  전체영역(메인 Nav + 컨텐츠) 컴포넌트  */
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 135%;
  max-width: 1554px;
  margin: 5 auto;
  white-space: normal;
`;
/**  컨테이너 컴포넌트  */
const Container = styled.div`
  width: 100%;
  padding: 24px;
`;
/**  컨텐츠 묶음 컴포넌트(header, menu, Maincontainer)  */
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5px;
`;
/**  좌측 setting Nav + 우측 컨텐츠 묶음 컴포넌트  */
const MainContainer = styled.div`
  display: flex;
  padding-right: 15px;
`;
/**  우측 컨텐츠 묶음 컴포넌트  */
const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
`;
/**  타이틀 컴포넌트  */
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d6d9dc;
`;
/**  h1 컴포넌트  */
const H1 = styled.h1`
  font-weight: 500;
  margin: 0px;
  font-size: 1.5em;
  line-height: calc(15 / 13);
`;
/**  p 컴포넌트  */
const P = styled.p`
  margin-bottom: 1.2em;
  white-space: normal;
  text-align: left;
  font-size: 1em;
  line-height: 1.5em;
  clear: both;
  font-size: 1rem;
`;
/**  ul 컴포넌트  */
const UL = styled.ul`
  margin-bottom: 1.2em;
  margin-left: 3em;
  text-align: left;
  > li {
    list-style: disc;
    white-space: normal;
    font-size: 1.1em;
    line-height: 1.5em;
    margin-bottom: 10px;
  }
`;
/**  form 컴포넌트  */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
/**  fieldset 컴포넌트  */
const Fieldset = styled.fieldset`
  margin-bottom: 24px;
`;
/**  ckeck박스 컴포넌트  */
const CheckDiv = styled.div`
  > label {
    display: flex;

    > div {
      white-space: normal;
      font-size: 1em;
      line-height: 1.2em;
      text-align: left;
      margin-left: 10px;
    }
  }
`;
/**  삭제버튼 컴포넌트  */
const DeleteBtn = styled.button`
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: #d0393e;
  font-size: 1em;
  color: white;
  box-shadow: hsla(0, 0%, 100%, 0.4);
  padding: 10.4px;
  &:hover {
    cursor: pointer;
    background-color: #ab262a;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
    text-decoration: none;
  }
`;

// eslint-disable-next-line no-unused-vars
const PlsLoginDiv = styled.div`
  padding: 24px;
  height: calc(100vh - 23.4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

/**  마이페이지 Delete Profile  */
const MypageDelete = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.log);
  const [boxChecked, setBoxChecked] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    callback: false,
  });
  let deleteQuery = window.location.search;
  useEffect(() => {
    if (deleteQuery === "?delete-agree=on") {
      alert("회원정보를 삭제하고 로그아웃하였습니다.");
      navigate("/", { replace: true });
    }
  }, [deleteQuery, navigate]);
  const CheckedHandler = () => {
    setBoxChecked(!boxChecked);
  };

  const deleteHandler = () => {
    const accessToken = localStorage.getItem("Authorization");
    // const refreshToken = localStorage.getItem('Refresh');

    axios
      .delete(`accounts/delete`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
          // Refresh: refreshToken,
        },
      })
      .then((res) => {
        if (!res.ok) {
          alert("Failed to delete member information");
        } else {
          let data = res.data;
          console.log(data);
          localStorage.removeItem("Authorization");
          // localStorage.removeItem('Refresh');
          dispatch(deleteData());
          dispatch(logout(state));
        }
      })
      .catch(() => alert("An error occurred"));
  };
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
                  <H1>Delete Profile</H1>
                </Title>
                <div className="main_Txt">
                  <P>
                    Before confirming that you would like your profile deleted,
                    we'd like to take a moment to explain the implications of
                    deletion:
                  </P>
                  <UL>
                    <li>
                      Deletion is irreversible, and you will have no way to
                      regain any of your original content, should this deletion
                      be carried out and you change your mind later on.
                    </li>
                    <li>
                      Your questions and answers will remain on the site, but
                      will be disassociated and anonymized (the author will be
                      listed as "email") and will not indicate your authorship
                      even if you later return to the site.
                    </li>
                  </UL>
                  <P>
                    Confirming deletion will only delete your profile on Stack
                    Overflow - it will not affect any of your other profiles on
                    the Stack Exchange network. If you want to delete multiple
                    profiles, you'll need to visit each site separately and
                    request deletion of those individual profiles.
                  </P>
                </div>
                <Form>
                  <Fieldset>
                    <CheckDiv>
                      <label>
                        <div>
                          <input
                            type="checkbox"
                            name="delete-agree"
                            checked={boxChecked}
                            onChange={CheckedHandler}
                          />
                        </div>
                        <div>
                          I have read the information stated above and
                          understand the implications of having my profile
                          deleted. I wish to proceed with the deletion of my
                          profile.
                        </div>
                      </label>
                    </CheckDiv>
                  </Fieldset>
                  {boxChecked ? (
                    <DeleteBtn onClick={deleteHandler}>
                      {" "}
                      <ModalComponet
                        open={modal.open}
                        setModal={setModal}
                        message={modal.message}
                        title={modal.title}
                      />
                      Delete Profile
                    </DeleteBtn>
                  ) : (
                    <DeleteBtn className="disabled">Delete Profile</DeleteBtn>
                  )}
                </Form>
              </Main>
            </MainContainer>
          </Content>
        </Container>
      </MainDiv>
    </React.Fragment>
  );
};

export default MypageDelete;
