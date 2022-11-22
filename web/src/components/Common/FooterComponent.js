import React from "react";

import { Flex, Heading, Image, Text } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const FooterComponent = () => {
  return (
    <Flex direction="column" marginTop="5rem" width="100%">
      <Flex columnGap="40rem" justifyContent="center">
        <Flex direction="column">
          <Heading level="4">고객행복센터</Heading>
          <Flex>
            <Heading level="4">1234-5678</Heading>
            <Text>월~토요일 오전 7시 ~ 오후 6시</Text>
          </Flex>
        </Flex>
        <a href="https://www.flaticon.com/kr/free-icons/" title="요리법 아이콘">
          요리법 아이콘 제작자: Freepik - Flaticon
        </a>
      </Flex>
      <Flex
        backgroundColor="#F7F7F7"
        direction="column"
        rowGap="0"
        width="100%"
      >
        <Text alignSelf="center" fontSize="0.7rem" color="gray">
          WWTFFF에서 판매되는 상품 중에는 WWTFFF에 입점한 개별 판매자가 판매하는
          마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
        </Text>
        <Text alignSelf="center" fontSize="0.7rem" color="gray">
          마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
          통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불
          등 의무와 책임을 부담하지 않습니다.
        </Text>
        <Text
          alignSelf="center"
          fontSize="0.7rem"
          color="gray"
          marginTop="0.5rem"
          marginBottom="2rem"
        >
          ⓟ WWTFFF PROJECT
        </Text>
      </Flex>
    </Flex>
  );
};

export default FooterComponent;
