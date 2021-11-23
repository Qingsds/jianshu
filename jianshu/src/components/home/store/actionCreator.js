import {
  MOUSEENTER,
  MOUSELEAVE,
  GETARTICLELIST,
  BANNERPIC,
  WRITERLIST,
  CHANGEPAGE,
  GER_MORE_ARTICLE_LIST,
  SHOW_BACK_TOP,
} from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

const getArticleListC = (data) => ({
  type: GETARTICLELIST,
  data: fromJS(data),
});

const getMoreArticleListC = (data,page) => ({
  type: GER_MORE_ARTICLE_LIST,
  data: fromJS(data),
  page
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
export const showBackTop = (flag) => ({type:SHOW_BACK_TOP,flag})

export const getArticleList = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/articleList.json");
    const articleList = response.data.articleList;
    dispatch(getArticleListC(articleList));
  };
};

export const getBannerPic = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/bannerPic.json");
    const bannerPic = response.data.bannerPic;
    dispatch(getBannerPicC(bannerPic));
  };
};

export const getWriterList = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/writerList.json");
    const writers = response.data.writers;
    dispatch(getWriterListC(writers));
  };
};

export const getMoreArticleList = (page) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/articleMoreList.json?page=${page}`);
    const articleMoreList = response.data.data;
    dispatch(getMoreArticleListC(articleMoreList,page));
  };
};
