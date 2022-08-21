import { useMemo, useState } from "react";
import styled from "styled-components";
import { FcFolder, FcFile, FcLink } from "react-icons/fc";

export default function Item({ data, setDepsHistory }) {
  const [isActive, setIsActive] = useState(false);
  const isFolder = useMemo(() => data?.TYPE === 1, [data?.TYPE]);
  const isFile = useMemo(() => data?.TYPE === 2, [data?.TYPE]);
  const isUrl = useMemo(() => data?.TYPE === 3, [data?.TYPE]);

  const onClick = () => {
    setIsActive((prev) => !prev);
  };
  const onDoubleClick = () => {
    data?.TYPE === 1 && folderAction();
    data?.TYPE === 2 && fileAction();
    data?.TYPE === 3 && urlAction();
  };

  const folderAction = () => {
    console.log("이것은 폴더입니다.");
    setDepsHistory((prev) => [...prev, { ID: data?.ID, NAME: data?.NAME }]);
  };
  const fileAction = () => {
    console.log("이것은 파일입니다.");
  };
  const urlAction = () => {
    window.open(data?.URL);
  };

  const iconStyle = useMemo(
    () => ({
      width: 20,
      height: 20,
      marginRight: 10,
    }),
    []
  );

  const itemDrag = (e) => {
    // e.preventDefault();
    console.log(e);
  };

  return (
    <Container
      isActive={isActive}
      title={data?.NAME}
      onMouseDown={onClick}
      onDoubleClick={onDoubleClick}
      onDragStart={itemDrag}
      onDrag={itemDrag}
    >
      {/* 아이콘 */}
      {isFolder && <FcFolder style={iconStyle} />}
      {isFile && <FcFile style={iconStyle} />}
      {isUrl && <FcLink style={iconStyle} />}
      {/* 파일명 */}
      <Name>{data?.NAME}</Name>
      {/* 사이즈 */}
      <Size>{data?.SIZE ? data?.SIZE + " Byte" : ""}</Size>
      {/* 수정일자 */}
      <ModifyDate>{data?.MODIFY_DATE}</ModifyDate>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 4px;
  user-select: none;
  font-size: 13px;
  color: #444444;
  cursor: default;
  background: ${(x) => (x?.isActive ? "#eee !important" : "transparent")};
  &:hover {
    background: #f8f8f8;
  }
  & > * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Name = styled.p`
  width: calc(60% - 30px);
`;
const Size = styled.p`
  width: 10%;
`;
const ModifyDate = styled.p`
  width: 30%;
  text-align: right;
`;
