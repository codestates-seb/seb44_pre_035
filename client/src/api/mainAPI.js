import axios from "axios";

export const getQuestions = async ({ page, size, criteria, sort }) => {
  try {
    const res = await axios({
      url: `/questions?page=${page}&size=${size}&criteria=${criteria}&sort=${sort}`,
      method: "get",
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getQuestion = async (questionId) => {
  try {
    const res = await axios({
      url: `/questions/${questionId}`,
      method: "get",
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 답변 유무에 따라 질문들 가져오기
export const getQuestionsAnswered = async (
  { page, size, criteria, sort },
  yOrN,
) => {
  try {
    const res = await axios({
      url: `/questions/isAnswered/${yOrN}?page=${page}&size=${size}&criteria=${criteria}&sort=${sort}`,
      method: "get",
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const searchQuestion = async (
  keyword,
  { page, size, criteria, sort },
) => {
  try {
    const res = await axios({
      url: `/questions/search/${keyword}?page=${page}&size=${size}&criteria=${criteria}&sort=${sort}`,
      method: "get",
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

// 검색 후 답변 유무에 따라 질문들 가져오기
export const searchQuestionsAnswered = async (
  keyword,
  { page, size, criteria, sort },
  yOrN,
) => {
  try {
    const res = await axios({
      url: `/questions/search/${keyword}/isAnswered/${yOrN}?page=${page}&size=${size}&criteria=${criteria}&sort=${sort}`,
      method: "get",
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postAnswer = async (questionId, content) => {
  try {
    const res = await axios({
      url: `/questions/${questionId}/answers/submit`,
      method: "post",
      data: content,
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postComment = async (questionId, answerId, content) => {
  axios({
    url: `/questions/${questionId}/answers/${answerId}/comments`,
    method: "post",
    data: { content },
    headers: { "Content-Type": "application/json" },
  }).then((res) => console.log(res));
};

export const deletePost = async (postType, postId) => {
  try {
    const res = await axios({
      url: `/${postType}s/${postId}`,
      method: "delete",
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async (questionId, answerId, commentId) => {
  try {
    const res = await axios({
      url: `/questions/${questionId}/answers/${answerId}/comments/${commentId}`,
      method: "delete",
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
