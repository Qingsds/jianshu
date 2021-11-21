import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticleList, getMoreArticleList } from "../store/actionCreator";

import {
  ListWrapper,
  NoteWrapper,
  NoteTitle,
  NoteBody,
  NoteFoot,
  LoadMore,
} from "../style";

export default function List() {
  const articleList = useSelector((state) =>
    state.getIn(["home", "articleList"])
  );
  const articlePage = useSelector((state) =>
    state.getIn(["home", "articlePage"])
  );
  const dispatch = useDispatch();
  const showList = articleList.toJS();
  useEffect(() => {
    dispatch(getArticleList());
  }, []);

  function showMore() {
    console.log(1);
    dispatch(getMoreArticleList(articlePage + 1));
  }
  return (
    <ListWrapper>
      {showList.map((item) => {
        return (
          
          <NoteWrapper key={nanoid()} >
              <img
              className={item.src ? "right-pic" : ""}
              src={item.src || ""}
            ></img>
            <NoteTitle>{item.title}</NoteTitle>
            <NoteBody className={item.src ? "img-in" : ""}>{item.desc}</NoteBody>
            <NoteFoot>
              <span className="footIcon">
                <i className="iconfont">&#xe79f;</i>
                66.6
              </span>
              <span className="footIcon">子心故事</span>
              <span className="footIcon">
                <i className="iconfont">&#xe7a9;</i>100
              </span>
              <span className="footIcon">
                <i className="iconfont">&#xe7b3;</i>299
              </span>
            </NoteFoot>
          </NoteWrapper>
        );
      })}
      <LoadMore onClick={showMore}>阅读更多</LoadMore>
    </ListWrapper>
  );
}
