import React from "react";

import { Flex } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import ProductDetailComponent from "../components/ProductDetail/ProductDetailComponent";

const TestPage = () => {
  return (
    <Flex justifyContent="center" padding="1rem">
      <ProductDetailComponent />
    </Flex>
  );
};

export default TestPage;
