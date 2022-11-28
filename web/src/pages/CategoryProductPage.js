import { Flex } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import CategoryComponent from "../components/Common/CategoryComponent";
import { useParams } from "react-router-dom";

const CategoryProductPage = () => {
  const params = useParams();

  return (
    <Flex direction="column">
      <CategoryComponent />
      {params.category}
    </Flex>
  );
};

export default CategoryProductPage;
