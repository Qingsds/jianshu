import React, { useRef } from "react";
import { login } from "./store/actioncreators";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginWrapper, LoginNav, Input, Button } from "./style";

export default function Login() {
  let account = useRef();
  let password = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getIn(["login", "login"]));

  function userLogin(account, password) {
    return () => {
      dispatch(login(account, password));
    };
  }

  if (!state) {
    return (
      <LoginWrapper>
        <LoginNav>
          <span>用户登录</span>
          <Input placeholder="账号" innerRef={account} />
          <Input placeholder="密码" innerRef={password} />
          <Button onClick={userLogin(account, password)}>登录</Button>
        </LoginNav>
      </LoginWrapper>
    );
  } else {
    return <Redirect to="/" />;
  }
}
