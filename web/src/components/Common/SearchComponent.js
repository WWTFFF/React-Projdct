import React, { useState } from "react";
// amplify ui
import { SearchField } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState();

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const onClear = () => {
    setKeyword("");
  };

  const onSubmit = (event) => {
    navigate(`/search/${keyword}`);
  };

  return (
    <SearchField
      placeholder="검색어를 입력해주세요"
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
      onClear={onClear}
    />
  );
};

export default SearchComponent;
