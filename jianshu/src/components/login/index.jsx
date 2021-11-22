import React from "react";
import { LoginWrapper, LoginNav, Input, Button } from "./style";

export default function Login() {
  return (
    <LoginWrapper>
      <LoginNav>
        <span>用户登录</span>
        <Input placeholder="账号" />
        <Input placeholder="密码" />
        <Button>登录</Button>
      </LoginNav>
    </LoginWrapper>
  );
}
