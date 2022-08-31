import React from "react";
import styled from "styled-components"
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Error from "./components/Error";

import Search from "../search";
import Video from "../video";
import Playlist from "../playlist";
import Channel from "../channel";
import Saved from "../saved";
import Queue from "../queue";

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
      <Route path='search/video/:id' element={ <Video/> }/>
      <Route path='search/playlist/:id' element={ <Playlist/> }/>
      <Route path='search/channel/:id' element={ <Channel/> }/>
      <Route path='search' element={ <Search/> }/>
      <Route path='saved/video/:id' element={ <Video/> }/>
      <Route path='saved/playlist/:id' element={ <Playlist/> }/>
      <Route path='saved/channel/:id' element={ <Channel/> }/>
      <Route path='saved' element={ <Saved/> }/>
      <Route path='queue' element={ <Queue/> }/>
    </Routes>
    <Error />
  </Content>
);

export default Component;