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
  articlePage: 0,
  show: false,
});

const WRITERLIST = (pre, action) => {
  return pre.set("writers", action.data).set("totalPages", action.totalPages);
};
const GER_MORE_ARTICLE_LIST = (pre, action) => {
  return pre.merge({
    articleList: pre.get("articleList").concat(action.data),
    articlePage: action.page,
  });
};
const reducer = (pre = initialValue, action) => {
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
      return WRITERLIST(pre, action);
    case constants.CHANGEPAGE:
      return pre.set("currentPage", action.currentPage);
    case constants.GER_MORE_ARTICLE_LIST:
      return GER_MORE_ARTICLE_LIST(pre, action);
    case constants.SHOW_BACK_TOP:
      return pre.set("show", action.flag);
    default:
      return pre;
  }
};
export default reducer;
