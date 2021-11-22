import * as constants from "./constants";
import { fromJS } from "immutable";
// immutable 对象不可改变
const initialValue = fromJS({
  focus: false,
  list: [],
  currentPage: 1,
  totalPages: 0,
  mouseIn: false,
});
const reducer = (pre = initialValue, action) =>{
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return pre.set("focus", true);
    case constants.SEARCH_BLUR:
      return pre.set("focus", false);
    case constants.LIST_SUCCESS:
      return pre.merge({
        list: action.data,
        totalPages: action.totalPages,
      });
    case constants.CHANGE_PAGE:
      return pre.set("currentPage", action.page);
    case constants.MOUSE_ENTER:
      return pre.set("mouseIn", true);
    case constants.MOUSE_LEAVE:
      return pre.set("mouseIn", false);
    default:
      return pre;
  }
}
export default reducer;