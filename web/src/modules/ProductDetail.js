import { getProductDetailAPI } from "../api/ProductDetailAPI";
import { API_GATE_WAY_URL } from "../templates/URLTemplate";

const GET_PRODUCT_DETAIL = "productCategory/GET_PRODUCT_DETAIL"; // 상품의 상세 정보
const GET_PRODUCT_DETAIL_SUCCESS = "productCategory/GET_PRODUCT_DETAIL_SUCCESS"; // [성공] 상품의 상세 정보
const GET_PRODUCT_DETAIL_FAILURE = "productCategory/GET_PRODUCT_DETAIL_FAILURE"; // [실패] 상품의 상세 정보

/**
 * 상품의 상세 정보를 가져오는 dispatcher
 * @param {string} category
 * @returns
 */
export const getProductDetail = (category) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_DETAIL }); // 요청 시작

  try {
    const response = await getProductDetailAPI(API_GATE_WAY_URL, category);

    console.log(response.data);

    dispatch({
      type: GET_PRODUCT_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_DETAIL_FAILURE,
      payload: e,
      error: true,
    });
  }
};

const initialState = {
  // 로딩 상태
  loading: {
    GET_PRODUCT_DETAIL: false,
  },

  // 카테고리 상품
  product: {
    img_url: "",
    Amount: 0,
    Category: "카테고리",
    ProductName: "물품명",
  },
};

function productDetail(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAIL:
      console.log("GET_PRODUCT_DETAIL");

      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PRODUCT_DETAIL: true,
        },
      };

    case GET_PRODUCT_DETAIL_SUCCESS:
      console.log("GET_PRODUCT_DETAIL_SUCCESS");

      return {
        ...state,
        product: action.payload.result[0],
        loading: {
          ...state.loading,
          GET_PRODUCT_DETAIL: false,
        },
      };
    case GET_PRODUCT_DETAIL_FAILURE:
      console.log("GET_PRODUCT_DETAIL_FAILURE");

      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PRODUCT_DETAIL: false,
        },
      };
    default:
      return state;
  }
}

export default productDetail;
