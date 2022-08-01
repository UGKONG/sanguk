/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import styled from "styled-components";
import useDate from "../hooks/useDate";

export default function DateTimeContainer_() {
  const [dateData, setDateData] = useState(null);

  const getDateTime = () => {
    let now = useDate(new Date(), "all", true);
    let [date, time] = now?.split(" ");
    setDateData({ date, time });
  };

  useEffect(() => {
    getDateTime();
    let interval = setInterval(getDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <View size={13}>{dateData?.date}</View>
      <View size={16}>{dateData?.time}</View>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  border-radius: 8px;
  bottom: -14px;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  height: 80px;
  background-color: #6c718b;
  padding-top: 10px;
`;
const View = styled.p`
  text-align: center;
  padding: 4px 0;
  color: #eee;
  letter-spacing: 1px;
  font-size: ${(x) => x?.size ?? 16}px;
`;
