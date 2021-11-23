import React from "react";
import { useSelector} from "react-redux";
import { Redirect } from "react-router-dom";


export default function Write() {

  const state = useSelector((state) => state.getIn(["login", "login"]));

  if (state) {
    return (
        <div>写文章页面</div>
    );
  } else {
    return <Redirect to="/login" />;
  }
}
