// api 호출을 위한 모듈
import axios from "axios";

import { API_CATEGORY_PRODUCT } from "../templates/APITemplate";

// 상품 추천

// GET ~/category/:category
// 카테고리 상품 데이터를 가져오는 API

export const getCategoryProductAPI = (url, category) => {
  console.log(`${url}${API_CATEGORY_PRODUCT}/${category}`);
  return axios.get(`${url}${API_CATEGORY_PRODUCT}/${category}`);
};
