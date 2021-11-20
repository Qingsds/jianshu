import React, { createRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWriterList, changePage } from "../store/actionCreator";
import { nanoid } from "nanoid";

import {
  WriterWrapper,
  WriterTitle,
  WriterItem,
  WriterList,
  FindMore,
  TitleSwitch,
} from "../style";

export default function Writer() {
  useEffect(() => {
    dispatch(getWriterList());
  }, []);
  const spinIcon = createRef();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.getIn(["home", "writers"]));
  const currentPage = useSelector((state) =>
    state.getIn(["home", "currentPage"])
  );
  const totalPages = useSelector((state) =>
    state.getIn(["home", "totalPages"])
  );
  const writers = list.size ? list.toJS():[];
  function showList() {
    let showList = [];
    for (let i = (currentPage - 1) * 5; i < currentPage * 5; i++) {
      showList.push(
        <WriterItem key={nanoid()}>
          <img className="avatar" src={writers[i].src} alt="" />
          <a className="name">{writers[i].name}</a>
          <a className="follow name">+&nbsp;关注</a>
          <p className="name p">
            写了{writers[i].words}字 · {writers[i].likes}喜欢
          </p>
        </WriterItem>
      );
    }
    return showList;
  }

  function changePages() {
    let originAngle = spinIcon.current.style.transform.replace(/[^0-9]/gi, "");
    if (!originAngle) originAngle = 0;
    spinIcon.current.style.transform = `rotate(${originAngle * 1 + 360}deg)`;
    dispatch(changePage(currentPage >= totalPages ? 1 : currentPage + 1));
  }

  return (
    <WriterWrapper>
      <WriterTitle>
        <span>推荐作家</span>
        <TitleSwitch onClick={changePages}>
          <i className="iconfont spin" ref={spinIcon}>
            &#xe73a;
          </i>
          换一批
        </TitleSwitch>
      </WriterTitle>
      <WriterList>{showList()}</WriterList>
      <FindMore>
        查看全部<i className="iconfont">&#xe743;</i>
      </FindMore>
    </WriterWrapper>
  );
}
