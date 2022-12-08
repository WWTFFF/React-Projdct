import React, { useEffect } from "react";

import { Collection, Flex } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { useDispatch, useSelector } from "react-redux";
import { getSearchProduct } from "../../modules/SearchProduct";
import Loading from "../Common/Loading";
import ProductItem from "./ProductItem";
import { NavLink } from "react-router-dom";
import { getProductDetail } from "../../modules/ProductDetail";

const SearchProductComponent = ({ keyword }) => {
  // dispatch
  const dispatch = useDispatch();

  // useSelector
  const searchProduct = useSelector(
    (state) => state.searchProduct.searchProduct
  );

  const loading = useSelector(
    (state) => state.searchProduct.loading.GET_SEARCH_PRODUCT
  );

  useEffect(() => {
    dispatch(getSearchProduct(keyword));
  }, [keyword]);

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
      ProductName: product.f__name,
      Price: product.price,
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
          {searchProduct.hits && (
            <Collection
              justifyContent="center"
              items={searchProduct.hits.hit}
              gap="1.5rem"
              wrap="wrap"
              direction="row"
              type="grid"
              templateColumns="1fr 1fr 1fr 1fr"
            >
              {(item, index) => (
                <Flex key={item.id}>
                  <Flex
                    onClick={() => {
                      onClick(item.fields);
                    }}
                  >
                    <NavLink
                      to={"/product/" + item.id}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ProductItem productData={item.fields} />
                    </NavLink>
                  </Flex>
                </Flex>
              )}
            </Collection>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default SearchProductComponent;
