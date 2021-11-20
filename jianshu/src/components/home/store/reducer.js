import { fromJS } from "immutable";

import log from "../../../static/log.png";
import { MOUSEENTER, MOUSELEAVE } from "./constants";
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
  articleList: [
    {
      title: "陪孩子睡觉",
      desc: "昨晚，看见孩子的睡姿，我愣住了。 以前，我睡在他的右边，通常他吃完奶直接转身背对着我，朝着左侧睡。 可是，分离了10天，昨晚我发现他居然大部分时... ",
    },
    {
      title: "风雨II孤独的日子有你",
      desc: "01 黄鹂，和黄丽，是邻居。 黄丽，长在窗台上。黄鹂生活在院子里。 黄丽，是一盆多肉，来自彩云之南。 提起彩云之南，黄... ",
    },
    {
      title: "不说比说更有力量💪",
      desc: "不爱说话，不会说话，是性格内向的表现，不必自责。爱写作的人，大都是性格内向的人。性格内向的人，内心安静，能够坐下，能够独处。 难过的时候，找不到... ",
    },
    {
      title: "陪孩子睡觉",
      desc: "昨晚，看见孩子的睡姿，我愣住了。 以前，我睡在他的右边，通常他吃完奶直接转身背对着我，朝着左侧睡。 可是，分离了10天，昨晚我发现他居然大部分时... ",
    },
    {
      title: "风雨II孤独的日子有你",
      desc: "01 黄鹂，和黄丽，是邻居。 黄丽，长在窗台上。黄鹂生活在院子里。 黄丽，是一盆多肉，来自彩云之南。 提起彩云之南，黄... ",
    },
    {
      title: "不说比说更有力量💪",
      desc: "不爱说话，不会说话，是性格内向的表现，不必自责。爱写作的人，大都是性格内向的人。性格内向的人，内心安静，能够坐下，能够独处。 难过的时候，找不到... ",
    },
  ],
  mouseIn: false,
});

export default (pre = initialValue, action) => {
  switch (action.type) {
    case MOUSEENTER:
      return pre.set("mouseIn", true);
    case MOUSELEAVE:
      return pre.set("mouseIn", false);
    default:
      return pre;
  }
};
