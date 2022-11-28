import React from "react";

import { Flex, Image, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

/*
데이터 형식
    {
      name: "[비오젠트라] 치킨 스톡",
      discount: "18%",
      cost: "3,100 원",
      image: "/product.avif",
    },
*/
const ProductItem = ({ productData }) => {
  return (
    <Flex direction="column">
      <Image src={productData.img_url} height="20rem" width="16rem" />
      <Flex direction="column">
        {productData.ProductName}
        <Flex>
          {productData.discount && (
            <Text color="#FA622F" fontWeight="bold">
              {productData.discount}
            </Text>
          )}
          <Text fontWeight="bold">
            {productData.Amount.toLocaleString("kr") + "원"}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductItem;
