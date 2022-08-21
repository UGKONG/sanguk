import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Store } from "../_app";

export default function Setting() {
  const { setTitle } = useContext(Store);

  useEffect(() => setTitle("설정"), [setTitle]);

  return <Container></Container>;
}

const Container = styled.section`
  overflow: auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
