import axios from "axios";

const url = "https://c74e-220-76-183-16.ngrok-free.app";

export const postQuestion = (body) => {
  axios
    .post(`${url}questions/ask`, body)
    .then((res) => {
      console.log(res.data);
      alert("Post successful :)");
    })
    .catch((err) => {
      alert(err.message, "Post failed :(");
    });
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
