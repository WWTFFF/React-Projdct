import { getSearchProductAPI } from "../api/SearchProductAPI";
import { SEARCH_URL } from "../templates/URLTemplate";

const GET_SEARCH_PRODUCT = "searchProduct/GET_SEARCH_PRODUCT"; // 상품 검색
const GET_SEARCH_PRODUCT_SUCCESS = "searchProduct/GET_SEARCH_PRODUCT_SUCCESS"; // [성공] 상품 검색 목록
const GET_SEARCH_PRODUCT_FAILURE = "searchProduct/GET_SEARCH_PRODUCT_FAILURE"; // [실패] 상품 검색 목록

/**
 * 상품 검색 dispatcher
 * @param {string} keyWord
 * @returns
 */
export const getSearchProduct = (keyWord) => async (dispatch) => {
  dispatch({ type: GET_SEARCH_PRODUCT }); // 요청 시작

  try {
    const response = await getSearchProductAPI(SEARCH_URL, keyWord);

    console.log(response.data);

    dispatch({
      type: GET_SEARCH_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_SEARCH_PRODUCT_FAILURE,
      payload: e,
      error: true,
    });
  }
};

const initialState = {
  // 로딩 상태
  loading: {
    GET_SEARCH_PRODUCT: false,
  },

  // 검색 결과
  searchProduct: {},
};

function searchProduct(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_PRODUCT:
      console.log("GET_SEARCH_PRODUCT");

      return {
        ...state,
        loading: {
          ...state.loading,
          GET_SEARCH_PRODUCT: true,
        },
      };

    case GET_SEARCH_PRODUCT_SUCCESS:
      console.log("GET_SEARCH_PRODUCT_SUCCESS");

      return {
        ...state,
        searchProduct: action.payload,
        loading: {
          ...state.loading,
          GET_SEARCH_PRODUCT: false,
        },
      };
    case GET_SEARCH_PRODUCT_FAILURE:
      console.log("GET_SEARCH_PRODUCT_FAILURE");

      return {
        ...state,
        loading: {
          ...state.loading,
          GET_SEARCH_PRODUCT: false,
        },
      };
    default:
      return state;
  }
}

export default searchProduct;
