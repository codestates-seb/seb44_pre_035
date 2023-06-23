import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { deletePost, getQuestion, postAnswer } from "../../api/mainAPI";
import { POST_TYPE } from "../../components/main/utils";
import SectionQuestion from "../../components/main/question/SectionQuestion";
import SectionAnswer from "../../components/main/question/SectionAnswer";

export default function Question() {
  const { id: questionId } = useParams("id");
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  // answer 작성용
  const [body, setBody] = useState("");

  const requestGetQuestion = () => {
    getQuestion(questionId).then((res) => {
      setQuestion(res.data.data);
      setAnswers(res.data.answerList);
    });
  };

  const handleDeletePost = (postType, postId) => {
    deletePost(postType, postId).then((res) => {
      console.log(res);
      if (postType === POST_TYPE.QUESTION) navigate("/");
      else if (postType === POST_TYPE.ANSWER) requestGetQuestion();
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    postAnswer(questionId, body).then((res) => {
      console.log(res);
      requestGetQuestion();
    });
  };

  useEffect(() => {
    requestGetQuestion();
  }, []);

  return (
    <Container>
      <SectionQuestion
        question={question}
        handleDeletePost={handleDeletePost}
      />
      <SectionAnswer
        answers={answers}
        handleDeletePost={handleDeletePost}
        handleSubmitForm={handleSubmitForm}
        setBody={setBody}
      />
    </Container>
  );
}

const Container = styled.main`
  padding: 24px 16px;
`;
