import React from "react";
import { Flex } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import CategoryComponent from "../components/Common/CategoryComponent";
import { useParams } from "react-router-dom";
import ProductDetailComponent from "../components/ProductDetail/ProductDetailComponent";
import FooterComponent from "../components/Common/FooterComponent";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <Flex direction="column">
      <CategoryComponent />
      <ProductDetailComponent />
      {params.category}
      <FooterComponent />
    </Flex>
  );
};

export default ProductDetailPage;
