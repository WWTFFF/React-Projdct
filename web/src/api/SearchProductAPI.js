// api 호출을 위한 모듈
import axios from "axios";
import { API_SEARCH_PRODUCT } from "../templates/APITemplate";

// 상품 검색하는 API

// GET ~/2013-01-01/search
// 상품 검색하는 API

export const getSearchProductAPI = (url, keyWord) => {
  return axios.get(`${url}${API_SEARCH_PRODUCT}?q=${keyWord}`);
};
