import React, { useEffect } from "react";
import { RecommendWrapper, QRCodeWrapper, HiddenCode } from "../style";
import { useSelector, useDispatch } from "react-redux";
import { mouseIn, mouseOut, getBannerPic } from "../store/actionCreator";
import { nanoid } from "nanoid";

export default function Recommend() {
  const moueState = useSelector((state) => state.getIn(["home", "mouseIn"]));
  const list = useSelector((state) =>
    state.getIn(["home", "bannerPic"])
  );
  const bannerPicList = list.toJS();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBannerPic());
  }, []);

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
        {bannerPicList.map((item) => {
          return (
            <img key={nanoid()} className="banner-img" src={item.src} alt="" />
          );
        })}
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
