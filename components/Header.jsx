import { useRef, useContext } from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { Store } from "../pages/_app";

export default function Header_() {
  const inputRef = useRef(null);
  const { title, setTitle, searchValue, setSearchValue } = useContext(Store);

  const inputFocus = () => {
    inputRef?.current && inputRef?.current?.focus();
  };

  return (
    <Container>
      <Title>{title}</Title>
      <SearchContainer>
        <SearchIcon onClick={inputFocus} />
        <TextInput
          ref={inputRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e?.target?.value)}
        />
      </SearchContainer>
    </Container>
  );
}

const Container = styled.header`
  height: 80px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-size: 28px;
  padding: 0 5px;
  margin-right: 20px;
  letter-spacing: 10px;
  white-space: nowrap;
  user-select: none;
`;
const SearchContainer = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 5px 8px;
  min-width: 250px;
  width: 50%;
`;
const SearchIcon = styled(IoSearchSharp)`
  width: 22px;
  height: 22px;
  margin-right: 5px;
  color: #bbb;
  cursor: pointer;
`;
const TextInput = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Search",
}))`
  height: 100%;
  flex: 1;
  border: none;
  padding: 0 6px;
`;
