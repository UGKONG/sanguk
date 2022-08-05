import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Store } from "../_app";
import Item from "./Item";
import useAxios from "../../hooks/useAxios";

export default function MyFiles() {
  const { setTitle } = useContext(Store);
  const [depsHistory, setDepsHistory] = useState([{ ID: 0, NAME: "HOME" }]);
  const [list, setList] = useState([]);

  const getList = (id = 0) => {
    useAxios.get("/item?id=" + id).then(({ data }) => setList(data));
  };

  useEffect(() => setTitle("내파일"), [setTitle]);
  useEffect(getList, []);

  return (
    <Container>
      <span>{depsHistory?.map((item) => item?.NAME + " -> ")} </span>
      {list?.map((item) => (
        <Item
          key={item?.ID}
          data={item}
          getList={getList}
          setDepsHistory={setDepsHistory}
        />
      ))}
    </Container>
  );
}

const Container = styled.section`
  overflow: auto;
  flex: 1;
`;
