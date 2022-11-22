// Loading
// 로딩 구현 컴포넌트
// /public/loading.gif 이미지 사용

import React from "react";

// amplify css
import "@aws-amplify/ui-react/styles.css";

// amplify ui
import { Flex, Image } from "@aws-amplify/ui-react";

const Loading = () => {
  return (
    <Flex alignContent="center" justifyContent="center">
      <Image src="/loading.gif" width={"2rem"} height={"2rem"} />
    </Flex>
  );
};

export default Loading;
