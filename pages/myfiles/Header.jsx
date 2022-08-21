import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";
import { HiUpload } from "react-icons/hi";

export default function Header({ list, setDepsHistory, setIsUploadModal }) {
  const onClick = (i) => {
    setDepsHistory((prev) => {
      let copy = [...prev];
      copy = copy.slice(0, i + 1);
      return copy;
    });
  };

  return (
    <Container>
      <Directory>
        {list?.map((item, i, arr) => (
          <>
            <Name onClick={() => onClick(i)}>{item?.NAME}</Name>
            {arr?.length - 1 === i || <RightArrow />}
          </>
        ))}
      </Directory>
      <UploadIcon onClick={() => setIsUploadModal(true)} />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 0 10px 5px;
  border-bottom: 1px solid #eee;
  font-size: 13px;
  color: #777777;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Directory = styled.span`
  display: flex;
  align-items: center;
`;
const Name = styled.span`
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
  }
`;
const RightArrow = styled(RiArrowRightSLine)`
  margin: 0 4px 1px;
`;
const UploadIcon = styled(HiUpload)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    color: #333333;
  }
`;
