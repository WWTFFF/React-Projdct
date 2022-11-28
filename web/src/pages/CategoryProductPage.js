import { Flex } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import CategoryComponent from "../components/Common/CategoryComponent";
import { useParams } from "react-router-dom";
import CategoryProductComponent from "../components/CategoryProduct/CategoryProductComponent";
import FooterComponent from "../components/Common/FooterComponent";

const CategoryProductPage = () => {
  const params = useParams();

  return (
    <Flex direction="column">
      <CategoryComponent />
      <CategoryProductComponent category={params.category} />
      <FooterComponent />
    </Flex>
  );
};

export default CategoryProductPage;
