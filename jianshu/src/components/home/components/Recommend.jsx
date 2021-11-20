import React from "react";
import { RecommendWrapper, QRCodeWrapper, HiddenCode } from "../style";
import { useSelector, useDispatch } from "react-redux";
import { mouseIn, mouseOut } from "../store/actionCreator";

export default function Recommend() {
  const moueState = useSelector((state) => state.getIn(["home", "mouseIn"]));
  const dispatch = useDispatch();

  function mouseEnterHandler() {
    dispatch(mouseIn());
  }
  function MouseLeaveHandler() {
    dispatch(mouseOut());
  }

  function showCode() {
    if (moueState) {
      return (
        <HiddenCode>
          <img
            className="QRCode-big"
            src="http://r2uoh2y9h.hn-bkt.clouddn.com/u=812185057,1528141080&fm=26&fmt=auto"
            alt=""
          />
        </HiddenCode>
      );
    }
  }
  return (
    <RecommendWrapper>
      <div>
        <img
          className="banner-img"
          src="http://r2uoh2y9h.hn-bkt.clouddn.com/banner-s-daily-e6f6601abc495573ad37f2532468186f.png"
          alt=""
        />
        <img
          className="banner-img"
          src="http://r2uoh2y9h.hn-bkt.clouddn.com/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
          alt=""
        />
        <img
          className="banner-img"
          src="http://r2uoh2y9h.hn-bkt.clouddn.com/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
          alt=""
        />
        <img
          className="banner-img"
          src="http://r2uoh2y9h.hn-bkt.clouddn.com/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
          alt=""
        />
      </div>
      <QRCodeWrapper>
        <img
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={MouseLeaveHandler}
          className="QRCode-mini"
          src="http://r2uoh2y9h.hn-bkt.clouddn.com/u=812185057,1528141080&fm=26&fmt=auto"
          alt=""
        />
        <div className="info">
          <div className="qr-title">
            下载简书app <i className="iconfont">&#xe743;</i>
          </div>
          <div className="qr-description">随时随地发现和创作内容</div>
        </div>
        {showCode()}
      </QRCodeWrapper>
    </RecommendWrapper>
  );
}
