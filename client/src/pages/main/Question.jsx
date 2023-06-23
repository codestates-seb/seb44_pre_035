import styled from "styled-components";

import AskButton from "../../share/AskButton";
import { useNavigate, useParams } from "react-router-dom";
import Writer from "../../share/Writer";
import PostContainer from "../../components/main/question/PostContainer";
import QuestionStatus from "../../components/main/question/QuestionStatus";
import PostButton from "../../components/main/question/PostButton";
import { useState, useEffect } from "react";
import { deletePost, getQuestion, postAnswer } from "../../api/mainAPI";
import { POST_TYPE } from "../../components/main/utils";

export default function Question() {
  const { id: questionId } = useParams("id");
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [body, setBody] = useState("");
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
      <PageHeader>
        <PageTitleBox>
          <PageTitle>{question.title}</PageTitle>
          <QuestionStatus question={question} />
        </PageTitleBox>
        <AskButton />
      </PageHeader>
      <PageContent>
        <PostContainer post={question} handleDeletePost={handleDeletePost} />
      </PageContent>
      <AnswerHeader>
        <AnswerStatus>{answers.length} Answers</AnswerStatus>
      </AnswerHeader>
      <AnswerContent>
        {answers.map((answer) => (
          <PostContainer
            key={answer.answerId}
            post={answer}
            handleDeletePost={handleDeletePost}
          />
        ))}
      </AnswerContent>
      <AnswerWriter>
        <AnswerHeader>
          <AnswerStatus>Your Answer</AnswerStatus>
        </AnswerHeader>
        <AnswerForm onSubmit={handleSubmitForm}>
          <Writer name="answer" setBody={setBody} />
          <PostButton />
        </AnswerForm>
      </AnswerWriter>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px 16px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #e3e6e8;
  margin-bottom: 24px;
`;

const PageTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 27px;
  margin-bottom: 8px;

  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  padding-right: 20px;
`;

const PageContent = styled.div``;

const AnswerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const AnswerStatus = styled.div`
  font-size: 19px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const AnswerContent = styled.div``;

const AnswerWriter = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    margin-top: 24px;
  }
`;

const AnswerForm = styled.form``;
