import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
  right: 0;
  left: 0;
  top: 56px;
  bottom: 0;
  background: #f9f9f9;
`;
export const NavWrapper = styled.div`
  position: fixed;
  top: 200px;
  left: 450px;
  width: 56px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .icon-wrapper {
    cursor: pointer;
    box-sizing: border-box;
    padding: 5px;
    .nav-icon {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 10px 0px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      line-height: 48px;
      text-align: center;
      .iconfont {
        color: #969696;
        font-size: 20px;
      }
    }
    span {
      margin-top: 5px;
      display: block;
      width: 48px;
      text-align: center;
      font-size: 10px;
      color: #969696;
    }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 950px;
  margin: 0 auto;
  background: #fff;
  top: 10px;
  padding: 30px;
  box-sizing: border-box;
`;
export const ContentTitle = styled.div`
  cursor: pointer;
  font-size: 30px;
  line-height: 45px;
  margin: 10px 0;
`;
export const WriterInfo = styled.div`
  width: 400px;
  line-height: 19px;
  display: flex;
  .info-img {
    margin-right: 3px;
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .name-info {
    margin: 5px;
    display: flex;
    flex-direction: column;
    font-size: 7px;
    box-sizing: border-box;
    line-height: 10px;
    height: 30px;
    .name-info-follow {
      display: inline-block;
      margin-left: 4px;
      border: 0.8px solid orange;
      padding: 5px;
      color: orange;
      border-radius: 50px;
    }
  }
  .info-msg {
    margin-top: 4px;
    display: inline-block;
    font-size: 5px;
    span {
      display: inline-block;
      margin-right: 3px;
    }
  }
`;

export const ContentBody = styled.div`
  p {
    margin: 30px 0;
    font-size: 16px;
    color: rgb(64, 64, 64);
    line-height: 28px;
  }
`;
export const ContentFoot = styled.div`
  box-sizing: border-box;
  margin-left: -30px;
  padding: 30px;
  width: 950px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .foot-icon-wrapper {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    .foot-icon {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 10px 0px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      line-height: 48px;
      text-align: center;
      margin-right: 5px;
      color: #969696;
      .iconfont {
        font-size: 20px;
      }
    }
    span {
      font-size: 14px;
      display: inline-block;
      line-height: 48px;
      color: #969696;
    }
  }
  .foot-book-wrapper {
    cursor: pointer;
    color: #969696;
    display: flex;
    line-height: 48px;
    .foot-book {
      margin-right: 8px;
    }
    .font {
      display: inline-block;
      width: 48px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 10px 0px;
      border-radius: 50%;
      line-height: 48px;
      text-align: center;
      margin-right: 5px;
    }
  }
`;
