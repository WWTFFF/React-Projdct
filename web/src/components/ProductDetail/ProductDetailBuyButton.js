import React from "react";
import { Button, Flex } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { AiOutlineHeart, AiOutlineBell } from "react-icons/ai";

const ProductDetailBuyButton = () => {
  return (
    <Flex justifyContent="right" height="4rem">
      <Button padding="0.5rem">
        <AiOutlineHeart size="100%" color="rgb(95, 0, 128)" />
      </Button>
      <Button padding="0.5rem">
        <AiOutlineBell size="100%" color="rgb(95, 0, 128)" />
      </Button>
      <Button backgroundColor="rgb(95, 0, 128)" width="30rem" color="white">
        장바구니 담기
      </Button>
    </Flex>
  );
};

export default ProductDetailBuyButton;
