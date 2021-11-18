import {
  HeaderWrapper,
  HeaderNavWrapper,
  LogPic,
  Menu,
  RightMenu,
  MenuItem,
  MenuSearch,
  Button,
  SearchWrapper,
} from "./style";
import React from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./store";

export default function Header() {
  const focus = useSelector((state) => state.get("header").get("focus"));
  const dispatch = useDispatch();
  //获取焦点和失去焦点特效
  function focusHandler(e) {
    dispatch(
      focus === false
        ? actionCreators.SearchFocus()
        : actionCreators.SearchBlur()
    );
  }

  return (
    <div>
      <HeaderWrapper>
        <HeaderNavWrapper>
          <LogPic />
          <Menu>
            <MenuItem className="menu-left active">首页</MenuItem>
            <MenuItem className="menu-left">下载App</MenuItem>
            <MenuItem className="menu-left">IT技术</MenuItem>
            <MenuItem className="menu-right">登录</MenuItem>
            <MenuItem className="menu-right">
              <i className="iconfont">&#xe636;</i>
            </MenuItem>
            <SearchWrapper className={focus ? "focused" : ""}>
              <CSSTransition in={focus} timeout={200} classNames="slide">
                <MenuSearch
                  className="search"
                  onFocus={focusHandler}
                  onBlur={focusHandler}
                ></MenuSearch>
              </CSSTransition>
              <i className="iconfont">&#xe6cf;</i>
            </SearchWrapper>
          </Menu>
          <RightMenu>
            <Button className="reg">注册</Button>
            <Button className="write">
              <i className="iconfont">&#xe600;</i>
              写文章
            </Button>
          </RightMenu>
        </HeaderNavWrapper>
      </HeaderWrapper>
    </div>
  );
}
