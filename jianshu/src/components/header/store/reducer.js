import * as constants from "./constants";
import { fromJS } from "immutable";
// immutable 对象不可改变
const initialValue = fromJS({ focus: false });
export default (pre = initialValue, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return pre.set('focus', true);
    case constants.SEARCH_BLUR:
      return pre.set('focus', false);
    default:
      return pre;
  }
};
