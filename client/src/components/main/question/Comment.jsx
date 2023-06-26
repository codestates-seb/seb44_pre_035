import { useState } from "react";
import styled from "styled-components";
import { deleteComment, postComment } from "../../../api/mainAPI";
import { getNickname } from "../../../profile/getRandomAccount";

export default function Comment({
  comments,
  questionId,
  answerId,
  requestGetQuestion,
}) {
  const [content, setContent] = useState("");

  const handleSubmitComment = (event) => {
    event.preventDefault();
    postComment(questionId, answerId, content).then(() => {
      setContent("");
      requestGetQuestion();
    });
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(questionId, answerId, commentId).then(() => {
      requestGetQuestion();
    });
  };

  return (
    <Wrapper>
      <CommentList>
        {comments.map((comment) => (
          <CommentListItem key={comment.commentId}>
            <CommentContent>{comment.content}</CommentContent>
            <CommentUserInfo>{getNickname()}</CommentUserInfo>
            <CommentCreatedAt>
              {comment.createdAt.slice(0, 16)}
            </CommentCreatedAt>
            <DeleteButton
              onClick={() => handleDeleteComment(comment.commentId)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </DeleteButton>
          </CommentListItem>
        ))}
      </CommentList>
      <CommentWriter>
        <Form onSubmit={handleSubmitComment}>
          <Textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></Textarea>
          <Button>comment</Button>
        </Form>
      </CommentWriter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 24px;
`;

const CommentList = styled.ul`
  background-color: rgb(250, 250, 250);
`;

const CommentListItem = styled.li`
  padding: 5px 10px;

  & > span:not(:first-child) {
    margin-left: 5px;
  }
`;

const CommentContent = styled.span``;

const CommentUserInfo = styled.span`
  color: #0074cc;
  font-size: 13px;
`;

const CommentCreatedAt = styled.span`
  color: #6a737c;
  font-size: 13px;
`;

const DeleteButton = styled.button`
  display: inline-block;
  padding: 0 5px;
  fill: #6a737c;
`;

const CommentWriter = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  outline: none;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
`;

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  background: #e1ecf4;
  border: 1px solid #3a739d;
  color: #3a739d;
  border-radius: 3px;
  padding: 3px;
  margin-left: 5px;
`;
