import {
  MOUSEENTER,
  MOUSELEAVE,
  GETARTICLELIST,
  BANNERPIC,
  WRITERLIST,
  CHANGEPAGE,
} from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const getArticleListC = (data) => ({
  type: GETARTICLELIST,
  data: fromJS(data),
});
const getBannerPicC = (data) => ({ type: BANNERPIC, data: fromJS(data) });
const getWriterListC = (data) => ({
  type: WRITERLIST,
  data: fromJS(data),
  totalPages: Math.ceil(data.length / 5),
});

export const mouseIn = () => ({ type: MOUSEENTER });
export const mouseOut = () => ({ type: MOUSELEAVE });
export const changePage = (page) => ({ type: CHANGEPAGE, currentPage: page });

export const getArticleList = () => {
  return async (dispatch) => {
    const response = await axios.get("./api/articleList.json");
    const articleList = response.data.articleList;
    dispatch(getArticleListC(articleList));
  };
};

export const getBannerPic = () => {
  return async (dispatch) => {
    const response = await axios.get("./api/bannerPic.json");
    const bannerPic = response.data.bannerPic;
    dispatch(getBannerPicC(bannerPic));
  };
};

export const getWriterList = () => {
  return async (dispatch) => {
    const response = await axios.get("./api/writerList.json");
    const writers = response.data.writers;
    dispatch(getWriterListC(writers));
  };
};
