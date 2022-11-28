import React from "react";

import { Flex, Image } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import ProductDetailBuyButton from "./ProductDetailBuyButton";
import ProductDetailInformation from "./ProductDetailInformation";

const ProductDetailComponent = ({ productName }) => {
  // TODO 해당 제품 로딩하는 메소드 작성할 것

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
          <Image
            src="https://img-cf.kurly.com/shop/data/goods/165303917855l0.jpeg"
            width="430px"
            height="552px"
          />
        </Flex>
        {/* 우측 제품 설명 */}
        <Flex direction="column">
          <ProductDetailInformation dummyData={dummyData} />

          {/* 구매 버튼 표시 */}
          <ProductDetailBuyButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductDetailComponent;
