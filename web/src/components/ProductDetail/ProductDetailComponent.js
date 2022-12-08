import React from "react";

import { Flex, Image, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import ProductDetailBuyButton from "./ProductDetailBuyButton";
import ProductDetailInformation from "./ProductDetailInformation";
import { useSelector } from "react-redux";

const ProductDetailComponent = () => {
  // TODO 해당 제품 로딩하는 메소드 작성할 것

  // useSelector
  const product = useSelector((state) => state.productDetail.product);

  const dummyData = {
    ProductName: "[브룩클린688] 호주산 목초육 치마살 구이용 300g (냉장)",
    Price: 15500,
    Discount: 0.25,
  };

  return (
    <Flex direction="column">
      <Flex direction="row" justifyContent="center" columnGap="5rem">
        <Flex>
          {/* 좌측 제품 사진 */}
          <Image src={product.img_url} width="430px" height="552px" />
        </Flex>
        {/* 우측 제품 설명 */}
        <Flex direction="column">
          <ProductDetailInformation product={product} />

          {/* 구매 버튼 표시 */}
          <ProductDetailBuyButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductDetailComponent;
