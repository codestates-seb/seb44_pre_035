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
    console.log(res);
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
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const searchQuestion = async (keyword) => {
  try {
    const res = await axios({
      url: `/questions/search/${keyword}`,
      method: "get",
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postAnswer = async (questionId, body) => {
  try {
    const res = await axios({
      url: `/questions/${questionId}/answers/submit`,
      method: "post",
      data: body.answer,
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = async (postType, postId) => {
  try {
    const res = await axios({
      url: `/${postType}s/${postId}`,
      method: "delete",
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
