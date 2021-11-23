import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useSelector, useDispatch,} from "react-redux";
import { Link } from "react-router-dom";
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
  // const [state, dispatch] = useReducer(reducer, initialState, init)
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
  }, [dispatch]);

  function showMore() {
    dispatch(getMoreArticleList(articlePage + 1));
  }
  return (
    <ListWrapper>
      {showList.map((item) => {
        return (
          <div key={nanoid()}>
            <Link to={`/detail/${item.title}`} style={{textDecoration:"none"}}>
              <NoteWrapper>
                <img
                  className={item.src ? "right-pic" : ""}
                  src={item.src || ""} alt=""
                ></img>
                <NoteTitle>{item.title}</NoteTitle>
                <NoteBody className={item.src ? "img-in" : ""}>
                  {item.desc}
                </NoteBody>
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
            </Link>
          </div>
        );
      })}
      <LoadMore onClick={showMore}>阅读更多</LoadMore>
    </ListWrapper>
  );
}
