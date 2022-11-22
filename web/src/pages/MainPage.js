import { Flex, Image } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import CategoryComponent from "../components/Common/CategoryComponent";
import FooterComponent from "../components/Common/FooterComponent";
import ProductRecommendComponent from "../components/Main/ProductRecommend/ProductRecommendComponent";

const MainPage = () => {
  return (
    <Flex direction="column" alignItems="center" paddingBottom="10remA">
      <CategoryComponent />
      {/*  메인 광고 컴포넌트 */}
      <Image src="/main-advertisement.avif" />
      {/* 상품 추천  */}
      <ProductRecommendComponent />
      <FooterComponent />
    </Flex>
  );
};

export default MainPage;
