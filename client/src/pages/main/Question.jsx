import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { deletePost, getQuestion } from "../../api/mainAPI";
import { POST_TYPE } from "../../components/main/utils";
import SectionQuestion from "../../components/main/question/SectionQuestion";
import SectionAnswer from "../../components/main/question/SectionAnswer";

export default function Question() {
  const { id: questionId } = useParams("id");
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

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
        questionId={questionId}
        answers={answers}
        handleDeletePost={handleDeletePost}
        requestGetQuestion={requestGetQuestion}
      />
    </Container>
  );
}

const Container = styled.main`
  padding: 24px 16px;
`;
