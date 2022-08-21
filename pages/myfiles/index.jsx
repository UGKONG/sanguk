import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Store } from "../_app";
import Item from "./Item";
import useAxios from "../../hooks/useAxios";
import Loading from "../../components/Loading";
import Header from "./Header";
import UploadModal from "./UploadModal";

export default function MyFiles() {
  const { setTitle } = useContext(Store);
  const [depsHistory, setDepsHistory] = useState([{ ID: 0, NAME: "home" }]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploadModal, setIsUploadModal] = useState(false);
  const [list, setList] = useState([]);

  const getList = () => {
    setIsLoading(false);
    const id = depsHistory[depsHistory?.length - 1]?.ID ?? 0;
    useAxios.get("/item?id=" + id).then(({ data }) => {
      setIsLoading(false);
      setList(data);
    });
  };

  const itemDrop = (e) => {
    e.preventDefault();
    console.log(e?.files);
  };

  useEffect(() => setTitle("내파일"), [setTitle]);
  useEffect(getList, [depsHistory]);

  return (
    <Container>
      <Header
        list={depsHistory}
        getList={getList}
        setDepsHistory={setDepsHistory}
        setIsUploadModal={setIsUploadModal}
      />
      <ItemList onDragEnd={itemDrop}>
        {isLoading ? (
          <Loading />
        ) : (
          list?.map((item) => (
            <Item
              key={item?.ID}
              data={item}
              getList={getList}
              setDepsHistory={setDepsHistory}
            />
          ))
        )}
      </ItemList>

      {isUploadModal && <UploadModal close={() => setIsUploadModal(false)} />}
    </Container>
  );
}

const Container = styled.section`
  overflow: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const ItemList = styled.section`
  padding: 10px 0;
  position: relative;
  flex: 1;
  overflow: auto;
`;
