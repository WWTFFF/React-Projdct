import { Flex, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductRecommend } from "../../../modules/ProductRecommend";
import Loading from "../../Common/Loading";
import ProductItem from "./ProductItem";

const ProductRecommendComponent = () => {
  // 임시 추천 데이터
  const recommendProductDummy = [
    {
      name: "[비오젠트라] 치킨 스톡",
      discount: "18%",
      cost: "3,100 원",
      image: "/product.avif",
    },
    {
      name: "[비오젠트라] 치킨 스톡2",
      cost: "3,100 원",
      image: "/product.avif",
    },
    {
      name: "[비오젠트라] 치킨 스톡3",
      discount: "18%",
      cost: "3,100 원",
      image: "/product.avif",
    },
    {
      name: "[비오젠트라] 치킨 스톡4",
      discount: "18%",
      cost: "3,100 원",
      image: "/product.avif",
    },
  ];

  // dispatch
  const dispatch = useDispatch();

  // useSelector
  const recommendedProduct = useSelector(
    (state) => state.productRecommend.recommendedProduct
  );
  const loading = useSelector(
    (state) => state.productRecommend.loading.GET_PRODUCT_RECOMMEND
  );

  useEffect(() => {
    dispatch(getProductRecommend());
  }, []);

  return (
    <Flex alignItems="center" direction="column">
      <Heading level="3">이 상품 어때요?</Heading>
      {/* TODO 임시로 4개 값 추가 */}
      {loading ? (
        <Loading />
      ) : (
        <Flex>
          {"recommendedProduct : " + recommendedProduct}
          {recommendProductDummy.map((product) => (
            <NavLink
              to={"/product/" + product.name}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ProductItem key={product.name} productData={product} />
            </NavLink>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default ProductRecommendComponent;
