import React from "react";
// amplify ui
import { Flex, Image, SearchField } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { CategoryDict } from "../../data/CategoryData";
import { NavLink } from "react-router-dom";

const CategoryComponent = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="2rem"
      padding="1rem"
    >
      <Flex>
        <Flex>
          <NavLink to="/">
            <Flex height="3rem" alignItems="center">
              <Image src="/logo.svg" />
            </Flex>
          </NavLink>
        </Flex>
        <SearchField placeholder="검색어를 입력해주세요" />
      </Flex>
      <Flex justifyContent="center" height="3rem" columnGap="5rem">
        {Object.keys(CategoryDict).map((menu) => (
          <Flex direction="row" alignItems="center" key={menu}>
            <NavLink
              to={CategoryDict[menu].link}
              style={({ isActive }) =>
                isActive
                  ? {
                      textDecoration: "none",
                      color: "#5F0080",
                      fontWeight: "bold",
                    }
                  : { textDecoration: "none", color: "#000000" }
              }
            >
              <Flex height="3rem" alignItems="center" fontSize="1.2rem">
                {CategoryDict[menu].kname}
              </Flex>
            </NavLink>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default CategoryComponent;
