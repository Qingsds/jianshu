import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";
const HeaderListCreator = (data) => ({
  type: constants.LIST_SUCCESS,
  data: fromJS(data),
  totalPages: Math.ceil(data.length / 7),
});
export const SearchFocus = () => ({ type: constants.SEARCH_FOCUS });
export const SearchBlur = () => ({ type: constants.SEARCH_BLUR });
export const ChangePage = (page) => ({ type: constants.CHANGE_PAGE, page });
export const MouseEnter = () => ({ type: constants.MOUSE_ENTER });
export const MouseLeave = () => ({ type: constants.MOUSE_LEAVE });
export const getHeaderList = () => {
  return async (dispatch) => {
    try {
      const data = await axios.get("./api/headerList.json");
      const list = data.data.data;
      dispatch(HeaderListCreator(list));
    } catch (error) {
      console.log(error);
    }
  };
};
