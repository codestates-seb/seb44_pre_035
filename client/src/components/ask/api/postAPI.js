import axios from "axios";

export const postQuestion = async (body) => {
  await axios.post("/questions/ask", body);
};

export const EditQuestion = async (body) => {
  const res = await axios.patch("/questions/{question-id}", body);
  return res;
};
