import * as constants from "./constants";
import { fromJS } from "immutable";

const initialValue = fromJS({ login: false });

export default function reduce(pre = initialValue, action) {
  switch (action.type) {
    case constants.LOG_IN:
      return pre.set("login", action.value);
    case constants.LOG_OUT:
      return pre.set("login", action.value);
    default:
      return pre;
  }
}
