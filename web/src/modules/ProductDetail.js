const GET_PRODUCT_DETAIL = "productDetail/GET_PRODUCT_DETAIL"; // 상품 정보
const GET_PRODUCT_DETAIL_SUCCESS =
  "productRecommend/GET_PRODUCT_DETAIL_SUCCESS"; // [성공] 상품 정보
const GET_PRODUCT_DETAIL_FAILURE =
  "productRecommend/GET_PRODUCT_DETAIL_FAILURE"; // [실패] 상품 정보

export const getProductDetail = (product) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_DETAIL }); // 요청 시작

  try {
    dispatch({
      type: GET_PRODUCT_DETAIL_SUCCESS,
      payload: product,
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

  // 상품
  product: {},
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
        product: action.payload,
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
