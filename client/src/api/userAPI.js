/* eslint-disable no-unused-vars */
import axios from "axios";

export const logIn = async (data) => {
  try {
    const res = await axios({
      method: "post",
      data,
      headers: { Authorization: null },
      url: "/login",
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};

export const signUp = async (data) => {
  try {
    const res = await axios({
      url: "/accounts/signup",
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

export const getUser = async (Token, userId) => {
  try {
    const res = await axios({
      url: `/accounts/${userId}`,
      method: "get",
      headers: { Authorization: `Bearer ${Token}` },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (Token, userId) => {
  try {
    const res = await axios({
      url: `/accounts/{account-id}/delete`,
      method: "get",
      headers: { Authorization: `Bearer ${Token}` },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
