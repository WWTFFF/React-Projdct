import { combineReducers } from "redux";
import productRecommend from "./ProductRecommend";
import categoryProduct from "./CategoryProduct";
import searchProduct from "./SearchProduct";
import productDetail from "./ProductDetail"

const rootReducer = combineReducers({
  productRecommend,
  categoryProduct,
  searchProduct,
  productDetail,
});

export default rootReducer;
