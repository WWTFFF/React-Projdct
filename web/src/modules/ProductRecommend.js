import { getProductRecommendAPI } from "../api/ProductRecommendAPI";
import { DJANGO_URL } from "../templates/URLTemplate";

const GET_PRODUCT_RECOMMEND = "productRecommend/GET_PRODUCT_RECOMMEND"; // 상품 추천
const GET_PRODUCT_RECOMMEND_SUCCESS =
  "productRecommend/GET_PRODUCT_RECOMMEND_SUCCESS"; // [성공] 상품 추천
const GET_PRODUCT_RECOMMEND_FAILURE =
  "productRecommend/GET_PRODUCT_RECOMMEND_FAILURE"; // [실패] 상품 추천

export const getProductRecommend = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_RECOMMEND }); // 요청 시작

  try {
    const response = await getProductRecommendAPI(DJANGO_URL);

    console.log(response.data);

    dispatch({
      type: GET_PRODUCT_RECOMMEND_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_RECOMMEND_FAILURE,
      payload: e,
      error: true,
    });
  }
};

const initialState = {
  // 로딩 상태
  loading: {
    GET_PRODUCT_RECOMMEND: false,
  },

  // 추천 상품
  recommendedProduct: [],
};

function productRecommend(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_RECOMMEND:
      console.log("GET_PRODUCT_RECOMMEND");

      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PRODUCT_RECOMMEND: true,
        },
      };

    case GET_PRODUCT_RECOMMEND_SUCCESS:
      console.log("GET_PRODUCT_RECOMMEND_SUCCESS");

      return {
        ...state,
        recommendedProduct: [...action.payload.products],
        loading: {
          ...state.loading,
          GET_PRODUCT_RECOMMEND: false,
        },
      };
    case GET_PRODUCT_RECOMMEND_FAILURE:
      console.log("GET_PRODUCT_RECOMMEND_FAILURE");

      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PRODUCT_RECOMMEND: false,
        },
      };
    default:
      return state;
  }
}

export default productRecommend;
