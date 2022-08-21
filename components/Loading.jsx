import React from "react";
import styled from "styled-components";
import { FiLoader } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiLoader2Fill } from "react-icons/ri";

export default function 로딩() {
  return (
    <Conatiner>
      <LoadIcon />
    </Conatiner>
  );
}

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const LoadIcon = styled(RiLoader2Fill)`
  width: 50px;
  height: 50px;
  color: #aaa;
  transform: rotate(0deg);
  animation: ani infinite 2.5s linear;

  @keyframes ani {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
`;
