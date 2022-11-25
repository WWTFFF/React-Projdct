import React from "react";

import { Badge, Button, Flex, Image, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const ProductDetailComponent = () => {
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
          {/* 제목 */}
          <Text fontSize="1.5rem">{dummyData.ProductName}</Text>
          {/* 가격 표시 */}
          <Flex direction="column" fontWeight="bold">
            <Flex fontSize="1.8rem">
              <Text color="rgb(250, 98, 47)">
                {dummyData.Discount * 100 + "%"}
              </Text>
              <Text>
                {(dummyData.Price * (1 - dummyData.Discount)).toLocaleString(
                  "kr"
                ) + "원"}
              </Text>
            </Flex>
            <Text color="rgb(181, 181, 181)" textDecoration="line-through">
              {dummyData.Price.toLocaleString("kr") + "원"}
            </Text>
          </Flex>
        </Flex>
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
      {/* 구매 버튼 표시 */}
      <Flex justifyContent="right" height="5rem">
        <Button></Button>
        <Button></Button>
        <Button backgroundColor="rgb(95, 0, 128)" width="30rem" color="white">
          장바구니 담기
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProductDetailComponent;
