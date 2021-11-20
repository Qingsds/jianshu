import React, { createRef } from "react";
import {
  WriterWrapper,
  WriterTitle,
  WriterItem,
  WriterList,
  FindMore,
  TitleSwitch,
} from "../style";

export default function Writer() {
  const spinIcon = createRef();
  function changePage() {
    let originAngle = spinIcon.current.style.transform.replace(/[^0-9]/gi, "");
    if (!originAngle) originAngle = 0;
    spinIcon.current.style.transform = `rotate(${originAngle * 1 + 360}deg)`;
  }
  return (
    <WriterWrapper>
      <WriterTitle>
        <span>推荐作家</span>
        <TitleSwitch onClick={changePage}>
          <i className="iconfont spin" ref={spinIcon}>
            &#xe73a;
          </i>
          换一批
        </TitleSwitch>
      </WriterTitle>
      <WriterList>
        <WriterItem>
            <img className="avatar" src="http://r2uoh2y9h.hn-bkt.clouddn.com/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg" alt="" />
            <a className="name">夜阑师兄</a>
            <a className="follow name" >+&nbsp;关注</a>
            <p className="name p">写了192k字·2k喜欢</p>
        </WriterItem>
        <WriterItem>
            <img className="avatar" src="http://r2uoh2y9h.hn-bkt.clouddn.com/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg" alt="" />
            <a className="name">夜阑师兄</a>
            <a className="follow name" >+&nbsp;关注</a>
            <p className="name p">写了192k字·2k喜欢</p>
        </WriterItem>
        <WriterItem>
            <img className="avatar" src="http://r2uoh2y9h.hn-bkt.clouddn.com/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg" alt="" />
            <a className="name">夜阑师兄</a>
            <a className="follow name" >+&nbsp;关注</a>
            <p className="name p">写了192k字·2k喜欢</p>
        </WriterItem>
        <WriterItem>
            <img className="avatar" src="http://r2uoh2y9h.hn-bkt.clouddn.com/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg" alt="" />
            <a className="name">夜阑师兄</a>
            <a className="follow name" >+&nbsp;关注</a>
            <p className="name p">写了192k字·2k喜欢</p>
        </WriterItem>
        <WriterItem>
            <img className="avatar" src="http://r2uoh2y9h.hn-bkt.clouddn.com/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg" alt="" />
            <a className="name">夜阑师兄</a>
            <a className="follow name" >+&nbsp;关注</a>
            <p className="name p">写了192k字·2k喜欢</p>
        </WriterItem>
      </WriterList>
      <FindMore></FindMore>
    </WriterWrapper>
  );
}
