import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import img1 from "../../static/1.jpg";

import {
  HomeWrapper,
  HomeLeftWrapper,
  HomeRightWrapper,
  BackTop,
} from "./style";
import { showBackTop } from "./store/actionCreator";

export default function Home() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.getIn(["home", "show"]));

  useEffect(() => {
    window.addEventListener("scroll", () => {
      dispatch(showBackTop(window.scrollY > 100 ? true : false));
    });
    return () => {
      window.addEventListener("scroll", () => {
        dispatch(showBackTop(window.scrollY > 100 ? true : false));
      });
    };
  }, []);

  function changeBackTop() {
    if (show) {
      return <BackTop onClick={toHomeTop}>👆</BackTop>;
    }
  }

  function toHomeTop() {
    window.scrollTo(0, 0);
  }
  return (
    <HomeWrapper>
      <HomeLeftWrapper>
        <img className="img-div" src={img1} />
        <Topic />
        <List />
      </HomeLeftWrapper>
      <HomeRightWrapper>
        <Recommend />
        <Writer />
      </HomeRightWrapper>
      {changeBackTop()}
    </HomeWrapper>
  );
}
