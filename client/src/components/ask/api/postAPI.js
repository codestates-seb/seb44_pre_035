import axios from "axios";

export const postQuestion = async (body) => {
  try {
    const res = await axios.post("/questions/ask", body);
    alert("Post successful :)");
    return res;
  } catch (error) {
    alert(error.message, "Post failed :(");
  }
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
