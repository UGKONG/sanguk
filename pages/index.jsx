import { useContext, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { Store } from "./_app";

export default function Home() {
  const { setTitle } = useContext(Store);
  const license = useRef([
    "1종 보통 운전면허",
    "웹디자인 기능사",
    "정보처리 기능사",
    "무선설비 기능사",
    "컴퓨터 활용능력 2급",
    "그래픽기술자격 2급",
    "정보기술자격 아래한글 A등급",
    "정보기술자격 엑셀 A등급",
    "코딩지도사 1급",
  ]);
  const skills = useRef([
    { name: "Html", link: "https://google.com" },
    { name: "Css", link: "https://google.com" },
    { name: "Sass", link: "https://google.com" },
    { name: "Scss", link: "https://google.com" },
    { name: "JavaScript", link: "https://google.com" },
    { name: "TypeScript", link: "https://google.com" },
    { name: "Node js", link: "https://google.com" },
    { name: "Styled Components", link: "https://google.com" },
    { name: "npm", link: "https://google.com" },
    { name: "yarn", link: "https://google.com" },
    { name: "Git", link: "https://google.com" },
    { name: "Webpack", link: "https://google.com" },
    { name: "Babel", link: "https://google.com" },
    { name: "jQuery", link: "https://google.com" },
    { name: "React", link: "https://google.com" },
    { name: "React Native", link: "https://google.com" },
    { name: "React Hooks", link: "https://google.com" },
    { name: "Next js", link: "https://google.com" },
    { name: "Vue", link: "https://google.com" },
    { name: "Vuex", link: "https://google.com" },
    { name: "Redux", link: "https://google.com" },
    { name: "MySQL", link: "https://google.com" },
    { name: "MariaDB", link: "https://google.com" },
    { name: "PHP", link: "https://google.com" },
    { name: "FireBase", link: "https://google.com" },
    { name: "Electron", link: "https://google.com" },
    { name: "Redux", link: "https://google.com" },
  ]);
  const tools = useRef([
    { name: "Visual Studio Code", link: "https://google.com" },
    { name: "Web Storm", link: "https://google.com" },
    { name: "Data Grip", link: "https://google.com" },
    { name: "DBeaver", link: "https://google.com" },
    { name: "DBeaver", link: "https://google.com" },
    { name: "HeidiSQL", link: "https://google.com" },
    { name: "File Zilla", link: "https://google.com" },
    { name: "Photo Shop", link: "https://google.com" },
    { name: "Illustrator", link: "https://google.com" },
    { name: "Figma", link: "https://google.com" },
    { name: "Postman", link: "https://google.com" },
    { name: "Notion", link: "https://google.com" },
    { name: "XCode", link: "https://google.com" },
    { name: "Android Studio", link: "https://google.com" },
  ]);

  const age = useMemo(() => {
    let now = new Date();
    let myYear = 1998;
    let result = now?.getFullYear() - myYear + 1;
    return result ?? "-";
  }, []);

  const onClick = (link) => link && window.open(link);

  useEffect(() => setTitle("홈"), [setTitle]);

  return (
    <>
      <Box>
        <Title>소개</Title>
        <Row>이름: 전상욱</Row>
        <Row>생년월일: 1998년 01월 27일 ({age}살)</Row>
        <Row>학력: 강원도립대학교 졸업</Row>
        <Row>경력 사항: 2020.08 ~ 재직 (리안소프트글로벌)</Row>
        <Row>수상: 강원도 기능결기대회 (정보기술) 동메달 입상</Row>
        <Row>
          자격증
          <List>
            {license?.current?.map((item, i) => (
              <Item key={i}>{item}</Item>
            ))}
          </List>
        </Row>
      </Box>
      <Box>
        <Title>업무 내용 기술</Title>
        <Row>
          👉 필라테스 CRM 개발 (회원 관리, 스케줄 관리)
          <List>
            <Item>웹, 하이브리드앱 / PC, Mobile (각각 개발)</Item>
            <Item>기능 기획</Item>
            <Item>웹 디자인 / PC, Mobile</Item>
            <Item>웹 프론트 개발 (JavaScript, JQuery)</Item>
            <Item>하이브리드 앱 (푸쉬기능)</Item>
          </List>
        </Row>
        <Row>
          👉 부평구 스마트 커뮤니티 플랫폼 개발 (정부 프로젝트, 커뮤니티 플랫폼)
          <List>
            <Item>웹 / PC, Tablet, Mobile (반응형)</Item>
            <Item>기능 기획 및 설계</Item>
            <Item>
              요구사항 검토 및 설계서 작성
              <br />
              (화면 설계서, 인터페이스 설계서, 컴포넌트 설계서, 클래스 설계서)
            </Item>
            <Item>웹 디자인 / PC, Tablet, Mobile</Item>
            <Item>웹 프론트 개발 (Scss, JavaScript, Vue)</Item>
          </List>
        </Row>
        <Row>
          👉 운동놀이학교 관리 프로그램 개발 (회원 관리, 유아 검사, 검사 결과,
          수업 관리, 출석 관리)
          <List>
            <Item>웹, 하이브리드앱 / PC, Tablet, Mobile (반응형)</Item>
            <Item>
              기능 기획 및 설계
              <br />
              (DB Table, Field 설계, REST API End Point 설계)
            </Item>
            <Item>UI 기획 및 디자인</Item>
            <Item>웹 프론트 개발 (React)</Item>
            <Item>웹 서버 개발 (Node.js)</Item>
            <Item>하이브리드 앱 (푸쉬기능)</Item>
          </List>
        </Row>
        <Row>
          👉 스마트 가로등 (정부 프로젝트)
          <List>
            <Item>웹, 데스크탑앱</Item>
            <Item>디스플레이 해상도 및 비율에 맞게 UI 기획 및 디자인</Item>
            <Item>미들웨어 개발 (날씨, 미세먼지 데이터 수집)</Item>
            <Item>웹 프론트 개발 (React, Electron)</Item>
            <Item>웹 서버 개발 (Node.js)</Item>
            <Item>아두이노 (시리얼 통신)</Item>
          </List>
        </Row>
      </Box>
      <Box>
        <Title>보유 기술</Title>
        {skills?.current?.map((item, i) => (
          <Hash key={i} onClick={() => onClick(item?.link)}>
            {item?.name}
          </Hash>
        ))}
      </Box>
      <Box>
        <Title>사용 가능 툴</Title>
        {tools?.current?.map((item, i) => (
          <Hash key={i} onClick={() => onClick(item?.link)}>
            {item?.name}
          </Hash>
        ))}
      </Box>
    </>
  );
}

const Box = styled.div`
  width: 50%;
  &:nth-of-type(2n + 1) {
    padding-right: 10px;
  }
  &:nth-of-type(2n) {
    padding-left: 10px;
  }
`;
const Title = styled.h3`
  padding: 0 0 10px 2px;
  border-bottom: 1px solid #ddd;
  margin: 0 0 16px;
  font-size: 20px;
  font-weight: 900;
`;
const Row = styled.div`
  width: 100%;
  padding: 0 0 20px;
`;
const List = styled.ul`
  padding: 10px;
`;
const Item = styled.li`
  margin-bottom: 8px;
  font-size: 16px;
  &::before {
    content: "* ";
  }
`;
const Hash = styled.article`
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  font-family: "Poppins", sans-serif;
  letter-spacing: 1px;
  float: left;
  background-color: #ddd;
  margin: 0 5px 5px 0;
  border-radius: 6px;
  cursor: pointer;
  &::before {
    content: "#";
    font-size: 16px;
    font-weight: 400;
  }
  &:hover {
    background-color: #ccc;
  }
`;
