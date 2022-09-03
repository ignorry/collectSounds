import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Playlist } from "../../../../models/content";
import { useIntl } from "react-intl";
import { SearchFilters } from "../../../../lib/api";
import { getDurationFromMs } from "../../../../lib/getDuration";

import Range from "../../../primitives/Range";
import Label from "../../../primitives/Label";
import PlayerButton from "../../../primitives/PlayerButton";
import Button from "../../../primitives/Button";
import Collapse from "../../../primitives/Collapse";
import Spinner from "../../../primitives/Spinner";
import List from "../../../content/List";
import { useNavigate } from "react-router-dom";
import AddTag from "../../../primitives/AddTag";

const NODE_ROUTE = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 1: 2;
const BASE_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "" : "/collectSounds/";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  background: ${ ({ theme }) => theme.colors.bgSecondary };
`;

const Column = styled.div`
  margin: auto;
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem`};
  width: 100%;
  padding: ${ ({ theme }) => `0 ${ theme.gaps.big }rem ${ theme.gaps.big }rem` };
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${ ({ theme }) => `-${ theme.gaps.small }rem` };
`;

const Description = styled.div`
  text-align: left;
`;

const Videos = styled.div`
  margin: auto;
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem`};
  width: 100%;
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const SpinnerContainer = styled.div`
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

/**
 * @typedef Props
 * @prop {Function} toggleSaved - callback on click saved
 * @prop {boolean} saved - is video saved in store or not
 */
export type Props = {
  playlist: Playlist;
  toggleSaved: Function;
  saved: boolean;
}

const Content: React.FC<Props> = ( props: Props ) => {
  const navigate = useNavigate();
  const intl = useIntl();

  const items = props.playlist.videos ? <List items={ props.playlist.videos.map( item => ({
    content: item.item,
    callback: () => navigate( `${ BASE_URL || '/' }${ window.location.pathname.split( '/' )[NODE_ROUTE] }/video/${ item.id }` )
  })) } emptyMessage={ intl.formatMessage({ id: 'emptyList' }) }/> : <SpinnerContainer><Spinner/></SpinnerContainer>;

  return (
    <Container>
      <Main>
        <Column>
          <Label text={ props.playlist.title }/>
          <Line>
            <Label text={ props.playlist.channelTitle }/>
            <Button
              callback={ props.toggleSaved } pic="playlist"
              active={ props.saved }
            />
          </Line>
          <AddTag item={ props.playlist }/>
          { props.playlist.description && props.playlist.description.length > 0 ?
            <Collapse label={ intl.formatMessage({ id: 'description' }) }> 
              <Description>
                <Label text={ props.playlist.description }/>
              </Description>
            </Collapse> : null
          }
        </Column>
      </Main>
      <Videos>
        { items }
      </Videos>
    </Container>
  );
}

export default Content;