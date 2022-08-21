import React from "react";
import styled from "styled-components"
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Error from "./components/Error";

import Search from "../search";

export const Content = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media ${ ({ theme }) => theme.media.small } {
    display: block;
  }
`;

export const Nav = styled.div`
  padding: ${ ({ theme }) => `${ theme.gaps.smallest }rem` } 0;
  background: ${ ({ theme }) => theme.colors.bgSecondary };
  z-index: ${ ({ theme }) => theme.order.footer };
  border-right: 1px solid ${ ({ theme }) => theme.colors.bg };

  @media ${ ({ theme }) => theme.media.small } {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    border-right: none;
  }
`;

const Component: React.FC = () => (
  <Content>
    <Nav>
      <Navigation/>
    </Nav>
    <Routes>
      <Route path='/' element={ <Search/> }/>
      <Route path='search' element={ <Search/> }/>
    </Routes>
    <Error />
  </Content>
);

export default Component;