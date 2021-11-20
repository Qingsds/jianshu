import React from "react";
import { TopicWrapper, TopicItem } from "../style";
import { useSelector, useDispatch } from "react-redux";
import img from "../../../static/log.png";
import { nanoid } from "nanoid";

export default function Topic() {
  const topicList = useSelector((state) => state.getIn(["home", "topicList"]));
  const list = topicList.toJS();
  return (
    <TopicWrapper>
      {list.map((item) => {
          console.log(item.title);
        return (
          <TopicItem key={nanoid()}>
            <img className="topic-pic" src={item.imgUrl} alt="abc" />
            {item.title}
          </TopicItem>
        );
      })}
      <TopicItem>
        <img className="topic-pic" src={img} alt="abc" />
        历史人物
      </TopicItem>
      <span className="icon-span">
        更多热门专题<i className="iconfont">&#xe743;</i>
      </span>
    </TopicWrapper>
  );
}
