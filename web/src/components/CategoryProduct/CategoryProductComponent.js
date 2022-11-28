import React, { useEffect } from "react";

import { Flex } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct } from "../../modules/CategoryProduct";
import Loading from "../Common/Loading";
import { NavLink } from "react-router-dom";
import ProductItem from "../Common/ProductItem";
import { CategoryDict } from "../../data/CategoryData";

const CategoryProductComponent = ({ category }) => {
  // 카테고리 전처리
  category = CategoryDict[category].kname;
  // dispatch
  const dispatch = useDispatch();

  // useSelector
  const categoryProduct = useSelector(
    (state) => state.categoryProduct.categoryProduct
  );
  const loading = useSelector(
    (state) => state.categoryProduct.loading.GET_CATEGORY_PRODUCT
  );

  useEffect(() => {
    dispatch(getCategoryProduct(category));
  }, [category]);

  return (
    <Flex alignItems="center" direction="column">
      {loading ? (
        <Loading />
      ) : (
        <Flex>
          {categoryProduct.map((product) => (
            <Flex key={product.ProductName}>
              <NavLink
                to={"/product/" + product.ProductName}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ProductItem productData={product} />
              </NavLink>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default CategoryProductComponent;
