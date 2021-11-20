import { fromJS } from "immutable";

import log from "../../../static/log.png";
import * as constants from "./constants";
const initialValue = fromJS({
  topicList: [
    {
      imgUrl: log,
      title: "二刺螈",
    },
    {
      imgUrl: log,
      title: "小熊",
    },
  ],
  articleList: [],
  bannerPic: [],
  writers: [],
  mouseIn: false,
  currentPage: 1,
  totalPages: 0,
});

export default (pre = initialValue, action) => {
  switch (action.type) {
    case constants.MOUSEENTER:
      return pre.set("mouseIn", true);
    case constants.MOUSELEAVE:
      return pre.set("mouseIn", false);
    case constants.GETARTICLELIST:
      return pre.set("articleList", action.data);
    case constants.BANNERPIC:
      return pre.set("bannerPic", action.data);
    case constants.WRITERLIST:
      return pre
        .set("writers", action.data)
        .set("totalPages", action.totalPages);
    case constants.CHANGEPAGE:
      return pre.set("currentPage", action.currentPage);
    default:
      return pre;
  }
};
