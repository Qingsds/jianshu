import styled from "styled-components";
import log from "../../static/log.png";

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: solid 1px #f1f1f1;
`;
export const HeaderNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  width: 1440px;
  margin: 0px auto;
`;
export const LogPic = styled.a`
  display: block;
  width: 100px;
  height: 56px;
  background: url(${log});
  background-size: contain;
`;
export const Menu = styled.div`
  width: 945px;
  height: 56px;
`;
export const MenuItem = styled.a`
  display: block;
  height: 56px;
  line-height: 56px;
  padding: 0 10px;
  &.menu-right {
    float: right;
    color: #bababa;
    font-size: 13px;
  }
  &.menu-left {
    float: left;
    color: #4a4a4a;
    font-size: 15px;
  }
  &.active {
    color: #ea7a66;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  with: 240px;
  .iconfont {
    position: absolute;
    bottom: 4px;
    right: 5px;
    width: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 15px;
  }
  &.focused {
    .iconfont {
      background: #888;
      color: #fff;
    }
    .search {
      width: 240px;
    }
  }
`;
export const MenuSearch = styled.input.attrs({ placeholder: "搜索" })`
  width: 160px;
  height: 28px;
  margin-top: 14px;
  margin-left: 20px;
  background: #eeeeee;
  border-radius: 40px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 30px;
  border: none;
  outline: none;
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
  &::placeholder {
    font-size: 10px;
  }
`;
export const SearchInfoWrapper = styled.div`
  position: absolute;
  top: 56px;
  left:23px;
  width: 240px;
  background: #fff;
  box-shadow:0 0 8px rgb(0,0,0,.2);
`;
export const SearchInfoTitle = styled.div`
  margin:15px 13px;
  font-size:8px;
  color:#787878;
`;
export const SearchInfoSwitch = styled.a`
  float:right;
`;
export const SearchInfoList = styled.div`
  margin:15px 0;
  margin-left:20px;
`;
export const SearchInfoItem = styled.a`
font-size:6px;
color:#777;
display:inline-block;
margin-bottom:10px;
margin-right:15px;
border:1px solid;
border-radius:3px;
padding:2px; 


`;
export const RightMenu = styled.div`
  width: 210px;
  height: 56px;
`;
export const Button = styled.a`
  display: inline-block;
  box-sizing: border-box;
  height: 30px;
  margin-top: 13px;
  margin-right: 7px;
  line-height: 30px;
  padding: 0 15px;
  border-radius: 20px;

  &.write {
    background: #ea6f5a;
    color: #fff;
    font-size: 14px;
  }
  &.reg {
    background: #fff;
    color: #ea6f5a;
    border: 0.5px #ea6f5a solid;
    font-size: 14px;
  }
`;
