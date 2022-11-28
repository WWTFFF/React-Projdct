import { getCategoryProductAPI } from "../api/CategoryProductAPI";
import { DJANGO_URL } from "../templates/URLTemplate";

const GET_CATEGORY_PRODUCT = "productCategory/GET_CATEGORY_PRODUCT"; // 카테고리 상품 목록
const GET_CATEGORY_PRODUCT_SUCCESS =
  "productCategory/GET_CATEGORY_PRODUCT_SUCCESS"; // [성공] 카테고리 상품 목록
const GET_CATEGORY_PRODUCT_FAILURE =
  "productCategory/GET_CATEGORY_PRODUCT_FAILURE"; // [실패] 카테고리 상품 목록

/**
 * 카테고리 상품 목록을 가져오는 dispatcher
 * @param {string} category
 * @returns
 */
export const getProductRecommend =
  ({ category }) =>
  async (dispatch) => {
    dispatch({ type: GET_CATEGORY_PRODUCT }); // 요청 시작

    try {
      const response = await getCategoryProductAPI(category);

      console.log(response.data);

      dispatch({
        type: GET_CATEGORY_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: GET_CATEGORY_PRODUCT_FAILURE,
        payload: e,
        error: true,
      });
    }
  };

const initialState = {
  // 로딩 상태
  loading: {
    GET_CATEGORY_PRODUCT: false,
  },

  // 추천 상품
  recommendedProduct: [],
};

function productCategory(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_PRODUCT:
      console.log("GET_CATEGORY_PRODUCT");

      return {
        ...state,
        loading: {
          ...state.loading,
          GET_CATEGORY_PRODUCT: true,
        },
      };

    case GET_CATEGORY_PRODUCT_SUCCESS:
      console.log("GET_CATEGORY_PRODUCT_SUCCESS");

      return {
        ...state,
        recommendedProduct: [...action.payload.products],
        loading: {
          ...state.loading,
          GET_CATEGORY_PRODUCT: false,
        },
      };
    case GET_CATEGORY_PRODUCT_FAILURE:
      console.log("GET_CATEGORY_PRODUCT_FAILURE");

      return {
        ...state,
        loading: {
          ...state.loading,
          GET_CATEGORY_PRODUCT: false,
        },
      };
    default:
      return state;
  }
}

export default productCategory;
