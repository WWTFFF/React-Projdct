// api 호출을 위한 모듈
import axios from "axios";
import { API_PRODUCT_RECOMMEND } from "../templates/APITemplate";

// 상품 추천

// GET ~/product/recommend
// 상품 추천 목록을 받아오는 API

export const getProductRecommendAPI = (url) => {
  return axios.get(`${url}${API_PRODUCT_RECOMMEND}`);
};
