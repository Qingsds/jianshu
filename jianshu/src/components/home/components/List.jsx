import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArticleList } from "../store/actionCreator";

import {
  ListWrapper,
  NoteWrapper,
  NoteTitle,
  NoteBody,
  NoteFoot,
} from "../style";

export default function List() {
  const articleList = useSelector((state) =>
    state.getIn(["home", "articleList"])
  );
  const dispatch = useDispatch();
  const showList = articleList.toJS();
  useEffect(() => {
    dispatch(getArticleList());
  }, []);
  return (
    <ListWrapper>
      {showList.map((item) => {
        return (
          <NoteWrapper key={nanoid()}>
            <NoteTitle>{item.title}</NoteTitle>
            <NoteBody>{item.desc}</NoteBody>
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
    </ListWrapper>
  );
}
