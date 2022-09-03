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
import Settings from "../settings";

const BASE_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "" : "/collectSounds/";

export const Content = styled.div`
  overflow: hidden;
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
      <Route path={`${ BASE_URL || '/' }`} element={ <Search/> }/>
      <Route path={`${ BASE_URL }search/video/:id`} element={ <Video/> }/>
      <Route path={`${ BASE_URL }search/playlist/:id`} element={ <Playlist/> }/>
      <Route path={`${ BASE_URL }search/channel/:id`} element={ <Channel/> }/>
      <Route path={`${ BASE_URL }search`} element={ <Search/> }/>
      <Route path={`${ BASE_URL }saved/video/:id`} element={ <Video/> }/>
      <Route path={`${ BASE_URL }saved/playlist/:id`} element={ <Playlist/> }/>
      <Route path={`${ BASE_URL }saved/channel/:id`} element={ <Channel/> }/>
      <Route path={`${ BASE_URL }saved`} element={ <Saved/> }/>
      <Route path={`${ BASE_URL }queue`} element={ <Queue/> }/>
      <Route path={`${ BASE_URL }settings`} element={ <Settings/> }/>
    </Routes>
    <Error />
  </Content>
);

export default Component;