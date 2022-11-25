import { Badge, Flex, Text } from "@aws-amplify/ui-react";
import React from "react";
import "@aws-amplify/ui-react/styles.css";

const ProductDetailInformation = ({ dummyData }) => {
  {
    /* 제목 */
  }
  return (
    <Flex direction="column">
      <Text fontSize="1.5rem">{dummyData.ProductName}</Text>
      {/* 가격 표시 */}
      <Flex direction="column" fontWeight="bold">
        <Flex fontSize="1.8rem">
          <Text color="rgb(250, 98, 47)">{dummyData.Discount * 100 + "%"}</Text>
          <Text>
            {(dummyData.Price * (1 - dummyData.Discount)).toLocaleString("kr") +
              "원"}
          </Text>
        </Flex>
        <Text color="rgb(181, 181, 181)" textDecoration="line-through">
          {dummyData.Price.toLocaleString("kr") + "원"}
        </Text>
      </Flex>
      {/* 구매 정보 표시 */}
      <Flex justifyContent="right">
        <Flex direction="column" width="100%" textAlign="right">
          <Text>총 상품 금액: {123}</Text>
          <Flex alignItems="center" justifyContent="right">
            <Badge backgroundColor="rgb(255, 191, 0)" color="white">
              적립
            </Badge>
            <Text>로그인 후, 할인 및 적립 혜택 제공</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductDetailInformation;
