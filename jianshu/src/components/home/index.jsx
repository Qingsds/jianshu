import React from "react";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import img1 from "../../static/1.jpg";

import { HomeWrapper, HomeLeftWrapper, HomeRightWrapper } from "./style";

export default function Home() {
  return (
    <HomeWrapper>
      <HomeLeftWrapper>
          <img className="img-div" src={img1}/>
        <Topic />
        <List />
      </HomeLeftWrapper>
      <HomeRightWrapper>
        <Recommend />
        <Writer />
      </HomeRightWrapper>
    </HomeWrapper>
  );
}
