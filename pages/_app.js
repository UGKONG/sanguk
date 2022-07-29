import "../styles/reset.scss";
import styled from "styled-components";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Container>
        <Navigation />
        <Contents>
          <Header />
          <Body>
            <Component {...pageProps} />
          </Body>
        </Contents>
      </Container>
    </>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 0 5px 2px #00000020;
`;
const Contents = styled.section`
  flex: 1;
  background-color: #f6f7fb;
  display: flex;
  flex-direction: column;
`;
const Body = styled.div`
  flex: 1;
  padding: 0 20px 20px;
`;
