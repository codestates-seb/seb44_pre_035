import axios from "axios";

export const getQuestions = async () => {
  try {
    const res = await axios({
      url: "/questions",
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
      data: body,
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
}; // postAnswer API 400 에러뜸
