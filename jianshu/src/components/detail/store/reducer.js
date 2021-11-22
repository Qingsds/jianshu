import * as constant from "./constants";
import { fromJS } from "immutable";

const initialValue = fromJS({
  content: {},
});
export default function reducer(pre = initialValue, action) {
  switch (action.type) {
    case constant.GET_CONTENT_LIST:
      return pre.set("content", action.data);
    default:
      return pre;
  }
}
