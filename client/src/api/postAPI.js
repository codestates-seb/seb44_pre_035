import axios from "axios";

export const postQuestion = async (body) => {
  await axios.post("http://52.79.137.231:8080/questions/ask", body);
};

export const EditQuestion = async (questionId, body) => {
  await axios.patch(`http://52.79.137.231:8080/questions/${questionId}`, body);
};

export const getTags = async () => {
  const response = await axios.get(`http://52.79.137.231:8080/questions/ask`, {
    headers: {
      "Content-Type": `application/json`,
      "ngrok-skip-browser-warning": "69420",
    },
  });
  return response;
};
