import { combineReducers } from "redux";
import productRecommend from "./ProductRecommend";
import categoryProduct from "./CategoryProduct";
import productDetail from "./ProductDetail";

const rootReducer = combineReducers({
  productRecommend,
  categoryProduct,
  productDetail,
});

export default rootReducer;
