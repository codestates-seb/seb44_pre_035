import styled from "styled-components";

import Writer from "../../../share/Writer";
import PostContainer from "../../../components/main/question/PostContainer";
import PostButton from "../../../components/main/question/PostButton";
import { useState } from "react";
import { postAnswer } from "../../../api/mainAPI";

export default function SectionAnswer({
  questionId,
  answers,
  handleDeletePost,
  requestGetQuestion,
}) {
  // answer 작성용
  const [body, setBody] = useState({ answer: "" });

  const handleSubmitAnswer = (event) => {
    event.preventDefault();
    postAnswer(questionId, body.answer).then((res) => {
      console.log(res);
      requestGetQuestion();
    });
  };

  return (
    <Wrapper>
      <AnswerHeader>
        <AnswerStatus>{answers.length} Answers</AnswerStatus>
      </AnswerHeader>
      <AnswerContent>
        {answers.map((answer) => (
          <PostContainer
            key={answer.answerId}
            post={answer}
            handleDeletePost={handleDeletePost}
            requestGetQuestion={requestGetQuestion}
          />
        ))}
      </AnswerContent>
      <AnswerWriter>
        <AnswerHeader>
          <AnswerStatus>Your Answer</AnswerStatus>
        </AnswerHeader>
        <AnswerForm onSubmit={handleSubmitAnswer}>
          <Writer name="answer" setBody={setBody} />
          <PostButton />
        </AnswerForm>
      </AnswerWriter>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 24px 16px;
  padding-top: 0;
`;

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
