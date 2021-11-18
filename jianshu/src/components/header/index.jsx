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
  SearchInfoWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from "./style";
import React from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./store";
import { nanoid } from "nanoid";

export default function Header() {
  const focus = useSelector((state) => state.getIn(["header", "focus"]));
  const data = useSelector((state) => state.getIn(["header", "list"]));
  const currentPage = useSelector((state) =>
    state.getIn(["header", "currentPage"])
  );
  const totalPages = useSelector((state) =>
    state.getIn(["header", "totalPages"])
  );
  const mouseIn = useSelector((state) => state.getIn(["header", "mouseIn"]));
  // console.log(currentPage, totalPages);
  const dispatch = useDispatch();
  //获取焦点和失去焦点特效
  function focusHandler(e) {
    dispatch(actionCreators.SearchFocus());
    if (data.size === 0) dispatch(actionCreators.getHeaderList());
  }
  function blurHandler() {
    dispatch(actionCreators.SearchBlur());
  }
  function mouseEnterHandler() {
    dispatch(actionCreators.MouseEnter());
  }

  function mouseLeaveHandler() {
    dispatch(actionCreators.MouseLeave());
  }

  //searchInfo分页功能
  function showList() {
    const jsList = data.toJS();
    const showList = [];
    for (let i = (currentPage - 1) * 7; i < currentPage * 7; i++) {
      showList.push(
        <SearchInfoItem key={nanoid()}>{jsList[i]}</SearchInfoItem>
      );
    }
    return showList;
  }
  //点击换页
  function changePage() {
    dispatch(
      actionCreators.ChangePage(currentPage >= totalPages ? 1 : currentPage + 1)
    );
  }
  // focus触发下拉信息
  function getListArea() {
    if (mouseIn || focus) {
      return (
        <SearchInfoWrapper
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={changePage}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{showList()}</SearchInfoList>
        </SearchInfoWrapper>
      );
    } else {
      return null;
    }
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
                  onBlur={blurHandler}
                ></MenuSearch>
              </CSSTransition>
              <i className="iconfont">&#xe6cf;</i>
              {getListArea()}
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
