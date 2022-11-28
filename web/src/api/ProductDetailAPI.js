// api 호출을 위한 모듈
import axios from "axios";

import { API_PRODUCT_DETAIL } from "../templates/APITemplate";

/**
 * GET ~/product/list/search/{search}
 * 상품 상세 정보를 가져오는 API
 * @param {string} url 요청 AWS URL 주소
 * @param {string} product 품목 명
 * @returns {dict} 상품 상세 정보
 */
export const getProductDetailAPI = (url, product) => {
  console.log(`${url}${API_PRODUCT_DETAIL}/${product}`);
  return axios.get(`${url}${API_PRODUCT_DETAIL}/${product}`);
};
