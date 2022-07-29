import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { useRef } from "react";

export default function Header() {
  const inputRef = useRef(null);

  const inputFocus = () => {
    inputRef?.current && inputRef?.current?.focus();
  };

  return (
    <Container>
      <SearchContainer>
        <SearchIcon onClick={inputFocus} />
        <TextInput ref={inputRef} />
      </SearchContainer>
    </Container>
  );
}

const Container = styled.header`
  height: 80px;
  padding: 20px;
`;
const SearchContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 5px 8px;
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
