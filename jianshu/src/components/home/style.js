import styled from "styled-components";
// home
export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  position:relative;
  top:40px;
`;
export const HomeLeftWrapper = styled.div`
  box-sizing: border-box;
  width: 640px;
  float: left;
  padding-top: 30px;
  .img-div {
    width: 640px;
    height: 270px;
    margin-bottom: 10px;
  }
`;
export const HomeRightWrapper = styled.div`
  box-sizing: border-box;
  width: 280px;
  padding-top: 30px;
  margin-left: 40px;
  float: right;
`;
export const BackTop = styled.div`
  position:fixed;
  right:50px;
  bottom:50px;
  width:50px;
  line-height:50px;
  text-align:center;
  border:1px solid rgb(240, 240, 240);
  border-radius:10px;
  font-size:21px;
  cursor:pointer;
`

// topic
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 10px 0 10px 0;
  margin-right: -18px;
  .icon-span {
    cursor: pointer;
    position: relative;
    display: inline-block;
    height: 34px;
    line-height: 34px;
    font-size: 10px;
    .iconfont {
      position: absolute;
      display: inline-block;
      height: 34px;
      line-height: 34px;
    }
  }
`;
export const TopicItem = styled.div`
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  float: left;
  background: #f7f7f7;
  color: #000;
  padding-right: 5px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin-right: 18px;
  margin-bottom: 10px;
  .topic-pic {
    display: block;
    float: left;
    height: 32px;
  }
`;

// list
export const ListWrapper = styled.div`
  width: 640px;
  transition: all 0.5s ease-in;
  box-sizing: border-box;
  .right-pic {
    width: 150px;
    height: 100px;
    display: block;
    float: right;
    border-radius:5px;
    margin-left:15px;
  }
`;
export const NoteWrapper = styled.div`
  border-bottom: 0.8px solid rgb(240, 240, 240);
  padding: 10px 2px;
  margin-bottom: 10px;
  &.img-in {
    width: 470px;
  }
`;
export const NoteTitle = styled.div`
  display: block;
  font-size: 18px;
  line-height: 25px;
  cursor: pointer;
  font-weight: 700px;
  color: rgb(47, 47, 47);
  text-decoration: none;
  &.inWord {
    text-decoration: underline rgb(47, 47, 47) auto solid;
  }
`;
export const NoteBody = styled.div`
  color: rgb(153, 153, 153);
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 8px;
`;
export const NoteFoot = styled.div`
  color: rgb(51, 51, 51);
  font-size: 12px;
  line-height: 20px;
  .footIcon {
    margin-right: 8px;
  }
  .iconfont {
    font-size: 10px;
  }
`;
export const LoadMore = styled.div`
  width: 625px;
  border-radius: 20px;
  background: rgb(155, 155, 155);
  color: rgb(255, 255, 255);
  font-size: 13px;
  cursor: pointer;
  margin: 30px 0;
  padding: 10px;
  text-align: center;
`;

// RecommendWrapper
export const RecommendWrapper = styled.div`
  margin-top: -2px;
  padding-bottom: 5px;
  .banner-img {
    display: block;
    cursor: pointer;
    width: 280px;
    margin-bottom: 4px;
  }
  .
`;
export const QRCodeWrapper = styled.div`
  position: relative;
  margin-top: 15px;
  margin-bottom: 30px;
  box-sizing: border-box;
  width: 280px;
  background: rgb(255, 255, 255);
  border: 0.8px solid rgb(240, 240, 240);
  border-radius: 6px;
  cursor: pointer;
  padding: 10px 22px;
  font-size: 17px;
  .QRCode-mini {
    display: inline-block;
    width: 60px;
  }
  .info {
    float: right;
    box-sizing: border-box;
    display: inline-block;
    line-height: 24px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .qr-description {
    font-size: 13px;
  }
`;
export const HiddenCode = styled.div`
  position: absolute;
  padding: 8px;
  background: #fff;
  bottom: 87px;
  left: 50px;
  border: 0.8px solid rgb(240, 240, 240);
  border-radius: 7px;
  .QRCode-big {
    width: 160px;
    height: 160px;
  }
`;

//writer
export const WriterWrapper = styled.div``;
export const WriterTitle = styled.div`
  margin: 15px 13px;
  font-size: 8px;
  color: #787878;
`;
export const TitleSwitch = styled.span`
  cursor: pointer;
  float: right;
  .spin {
    display: inline-block;
    margin-right: 3px;
    color: #777;
    background: #fff;
    font-size: 8px;
    transition: all 0.5s ease-in;
    transform-origin: center center;
  }
`;
export const WriterList = styled.div`
  text-align: left;
  font-size: 13px;
`;
export const WriterItem = styled.div`
  overflow: hidden;
  margin-left: 10px;
  margin-bottom: 13px;
  .avatar {
    width: 48px;
    border-radius: 50%;
    float: left;
  }
  .name {
    display: block;
    float: left;
    margin: 1px 10px;
    box-sizing: border-box;
    padding-top: 7px;
    cursor: pointer;
  }
  .follow {
    float: right;
    color: #79d26b;
    font-size: 13px;
    cursor: pointer;
    box-sizing: border-box;
    padding-right: 3px;
  }
  p {
    font-size: 12px;
    color: rgb(150, 150, 150);
    width: 140px;
  }
`;
export const FindMore = styled.div`
  box-sizing: border-box;
  background: rgb(247, 247, 247);
  text-align: center;
  padding: 7px;
  margin-left: 9px;
  border-radius: 4px;
  border: solid 0.8px rgb(220, 220, 220);
  cursor: pointer;
  font-size: 12px;
  line-height: 12px;
`;
