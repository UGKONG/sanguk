/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useCallback, useMemo, useRef } from "react";
import {
  IoHomeOutline,
  IoFolderOutline,
  IoBookOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { BsQuestion } from "react-icons/bs";
import DateTimeContainer from "./DateTimeContainer";

export default function Navigation__() {
  const router = useRouter();
  const menuList = useRef([
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "My Files", href: "/myfiles" },
    { id: 3, name: "Dictionary", href: "/dictionary" },
    { id: 4, name: "Setting", href: "/setting" },
  ]);

  const path = useMemo(() => {
    return router?.pathname;
  }, [router]);
  const activeClass = useCallback(
    (href) => (path === href ? "active" : ""),
    [path]
  );
  const mainNavigate = () => {
    router.push("/");
  };

  return (
    <Nav>
      <Logo onClick={mainNavigate}>
        전상욱
        <br />
        포트폴리오
      </Logo>
      <MenuContainer>
        {menuList?.current?.map((item) => (
          <Link key={item?.id} href={item?.href}>
            <MenuItem className={activeClass(item?.href)}>
              {item?.id === 1 ? (
                <IoHomeOutline />
              ) : item?.id === 2 ? (
                <IoFolderOutline />
              ) : item?.id === 3 ? (
                <IoBookOutline />
              ) : item?.id === 4 ? (
                <IoSettingsOutline />
              ) : (
                <BsQuestion />
              )}
              {item?.name}
            </MenuItem>
          </Link>
        ))}
      </MenuContainer>
      <DateTimeContainer />
    </Nav>
  );
}

const Nav = styled.nav`
  width: 230px;
  min-width: 230px;
  height: 100%;
  background-color: #343951;
  overflow: hidden;
  position: relative;
`;
const Logo = styled.h1`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
  color: #ffffff;
  letter-spacing: 3px;
  user-select: none;
  cursor: pointer;
`;
const MenuContainer = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #555555;
`;
const MenuItem = styled.a`
  padding: 10px 50px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  color: #777777;
  font-weight: 600;
  letter-spacing: 1px;
  user-select: none;
  cursor: pointer;
  & > svg {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
  &:hover {
    color: #aaaaaa;
  }
  &.active {
    color: #ffffff;
    &::before {
      content: "";
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateX(-50%);
      width: 10px;
      border-radius: 10px;
      background-color: #ffffff;
    }
  }
`;
