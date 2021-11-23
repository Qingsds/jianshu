import React from "react";
import {
  ContentWrapper,
  ContentTitle,
  ContentBody,
  WriterInfo,
  PageWrapper,
  NavWrapper,
  ContentFoot,
} from "./style";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getConstant } from "./store/actioncreator";
import { nanoid } from "nanoid";
import { useParams, withRouter } from "react-router-dom";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  const content = useSelector((state) => state.getIn(["detail", "content"]));
  const showData = content.toJS();
  useEffect(() => {
    console.log(params.title);
    dispatch(getConstant(params.title));
  }, [dispatch, params.title]);

  function showContent() {
    // 判断showData是否是个空对象
    if (JSON.stringify(showData) !== "{}") {
      return (
        <div>
          <ContentTitle>{showData.title}</ContentTitle>
          <WriterInfo>
            <img
              className="info-img"
              src="http://r2uoh2y9h.hn-bkt.clouddn.com/88bfdbeeb083.jpg"
              alt=""
            ></img>
            <div className="name-info">
              <div>
                {showData.writer}
                <i className="iconfont" style={{ color: "orange" }}>
                  &#xe788;
                </i>
                <div className="name-info-follow">关注</div>
              </div>
              <div>
                <i className="iconfont" style={{ color: "orange" }}>
                  &#xe781;
                </i>
                <div className="info-msg">
                  <span>2021.09.08 11:34:05</span>
                  <span>字数 216</span>
                  <span>阅读 7,435</span>
                </div>
              </div>
            </div>
          </WriterInfo>
          <ContentBody>
            {showData.content.map((item) => {
              return <p key={nanoid()}>{item}</p>;
            })}
          </ContentBody>
        </div>
      );
    }
  }

  return (
    <PageWrapper>
      <NavWrapper>
        <div className="icon-wrapper">
          <div className="nav-icon">
            <i className="iconfont">&#xe780;</i>
          </div>
          <span>249赞</span>
        </div>
        <div className="icon-wrapper">
          <div className="nav-icon">
            <i className="iconfont">&#xe79e;</i>
          </div>
          <span>赞赏</span>
        </div>
        <div className="icon-wrapper">
          <div className="nav-icon">
            <i className="iconfont">&#xe75b;</i>
          </div>
          <span>发现好文</span>
        </div>
      </NavWrapper>
      <ContentWrapper>
        {showContent()}
        <ContentFoot>
          <div className="foot-icon-wrapper">
            <div className="foot-icon">
              <i className="iconfont">&#xe780;</i>
            </div>
            <span>249人点赞</span>
          </div>
          <div className="foot-book-wrapper">
            <div className="foot-book">
              <i className="iconfont">&#xe7a9;</i>
              日记本
            </div>
            <span className="font">...</span>
          </div>
        </ContentFoot>
      </ContentWrapper>
    </PageWrapper>
  );
}
export default withRouter(Detail);
