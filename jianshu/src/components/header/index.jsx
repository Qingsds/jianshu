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

export default function Header() {
  const store = useSelector((state) => Object.assign({}, state));
  const { focus } = store;
  const dispatch = useDispatch();
  //获取焦点和失去焦点特效
  function focusHandler(e) {
    dispatch({ type: focus ? "search_blur" : "search_focus" });
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
