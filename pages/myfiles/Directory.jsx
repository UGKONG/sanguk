import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Directory({ list, getList }) {
  const onClick = (id) => {
    getList(id);
  };

  return (
    <Container>
      {list?.map((item, i, arr) => (
        <>
          <Name onClick={() => onClick(item?.ID)}>{item?.NAME}</Name>
          {arr?.length - 1 === i || <RightArrow />}
        </>
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 0 10px 10px;
  border-bottom: 1px solid #eee;
  font-size: 13px;
  color: #777777;
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
