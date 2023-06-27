/* eslint-disable no-unused-vars */
import axios from "axios";

export const logIn = async (data) => {
  try {
    const res = await axios({
      method: "post",
      data,
      headers: { Authorization: null },
      url: "http://52.79.137.231:8080/login",
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};

export const signUp = async (data) => {
  try {
    const res = await axios({
      url: "http://52.79.137.231:8080/accounts/signup",
      method: "post",
      data: {
        email: data.userEmail,
        password: data.userPassword,
        nickname: data.nickname,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    const res = await axios({
      url: `http://52.79.137.231:8080/accounts`,
      method: "get",
      headers: {
        "Content-Type": `application/json`,
        "ngrok-skip-browser-warning": "69420",
      },
    });
    console.log("users", res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
