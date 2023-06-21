import axios from "axios";

export const postQuestion = async (body) => {
  await axios.post("/questions/ask", body);
};

export const EditQuestion = async (body) => {
  await axios
    .put("/questions/{question-id}", body)
    .then((res) => {
      console.log(res.data);
      alert("Edit successful :)");
    })
    .catch((err) => {
      alert(err.message, "Edit failed :(");
    });
};
