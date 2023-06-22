import axios from "axios";

export const postQuestion = async (body) => {
  await axios.post("/questions/ask", body);
};

export const EditQuestion = async (questionId, body) => {
  await axios.patch(`/questions/${questionId}`, body);
};
