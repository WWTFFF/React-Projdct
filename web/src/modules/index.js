import { combineReducers } from "redux";
import productRecommend from "./ProductRecommend";
import categoryProduct from "./CategoryProduct";

const rootReducer = combineReducers({
  productRecommend,
  categoryProduct,
});

export default rootReducer;
