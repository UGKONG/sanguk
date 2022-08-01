import { createContext, useState } from "react";
import styled from "styled-components";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import "../styles/reset.scss";

export const Store = createContext(null);

export default function App({ Component, pageProps }) {
  const [title, setTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <Store.Provider value={{ title, setTitle, searchValue, setSearchValue }}>
      <Head />
      <Container>
        <Navigation />
        <Contents>
          <Header />
          <Body>
            <BodyContainer>
              <Component {...pageProps} />
            </BodyContainer>
          </Body>
        </Contents>
      </Container>
    </Store.Provider>
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
  overflow: auto;
`;
const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  position: relative;
  overflow: auto;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  display: flex;
  flex-wrap: wrap;
`;
