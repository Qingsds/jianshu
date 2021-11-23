import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const getContentCreator = (data) => ({
  type: constants.GET_CONTENT_LIST,
  data: fromJS(data),
});

export const getConstant = (params) => {
  return async (dispatch) => {
    const res = await axios.get(`/api/content.json?title=${params}`);
    const content = res.data.data;
    dispatch(getContentCreator(content));
  };
};
