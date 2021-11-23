import * as constants from "./constants";
import axios from "axios";
const loginCreator = () => ({
  type: constants.LOG_IN,
  value: true,
});

export const logoutCreator = () => ({
  type: constants.LOG_OUT,
  value: false,
});

export const login = (account, password) => {
  return async (dispatch) => {
    // 此处正常情况 应该使用post
    const res = await axios.get(
      `/api/login.json?account=${account}&password=${password}`
    );
    const result = res.data.data;
    console.log(result);
    result ? dispatch(loginCreator()) : dispatch(logoutCreator());
  };
};
