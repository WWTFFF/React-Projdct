import React, { useEffect } from "react";

import { Flex } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct } from "../../modules/CategoryProduct";
import Loading from "../Common/Loading";
import { NavLink } from "react-router-dom";
import ProductItem from "../Common/ProductItem";
import { CategoryDict } from "../../data/CategoryData";
import { getProductDetail } from "../../modules/ProductDetail";

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

  const onClick = (product) => {
    // 데이터 추가
    // const dummyData = {
    //   ProductName: "[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)",
    //   Price: 15500,
    //   Discount: 0.25,
    // };
    console.log(product);
    const refinedProduct = {
      img_url: product.img_url,
      ProductName: product.ProductName,
      Price: product.Amount,
      Discount: 0,
    };
    dispatch(getProductDetail(refinedProduct));
  };
  return (
    <Flex alignItems="center" direction="column">
      {loading ? (
        <Loading />
      ) : (
        <Flex>
          {categoryProduct.map((product) => (
            <Flex key={product.ProductName}>
              <Flex
                onClick={() => {
                  onClick(product);
                }}
              >
                <NavLink
                  to={"/product/" + product.ProductName}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ProductItem productData={product} />
                </NavLink>
              </Flex>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default CategoryProductComponent;
