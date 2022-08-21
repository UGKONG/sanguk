import React from "react";
import styled from "styled-components";

export default function 업로드_모달({ close }) {
  return (
    <>
      <Background onClick={() => close()} />
      <Container>업로드</Container>
    </>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000020;
  z-index: 5;
`;
const Container = styled.article`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  background-color: #fff;
  z-index: 10;
  transform: translate(-50%, -50%);
`;
