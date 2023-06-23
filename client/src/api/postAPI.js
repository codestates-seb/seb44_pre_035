import axios from "axios";

export const postQuestion = async (body) => {
  await axios.post("/questions/ask", body);
};

export const EditQuestion = async (questionId, body) => {
  await axios.patch(`/questions/${questionId}`, body);
};

export const getTags = async () => {
  const response = await axios.get(`/questions/ask`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
  });
  return response;
};
