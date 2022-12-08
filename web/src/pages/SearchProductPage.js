import { Flex } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import React from "react";
import CategoryComponent from "../components/Common/CategoryComponent";
import { useParams } from "react-router-dom";

import FooterComponent from "../components/Common/FooterComponent";
import SearchProductComponent from "../components/SearchProduct/SearchProductComponent";

const SearchProductPage = () => {
  const params = useParams();

  return (
    <Flex direction="column">
      <CategoryComponent />
      <SearchProductComponent keyword={params.keyword} />
      <FooterComponent />
    </Flex>
  );
};

export default SearchProductPage;
