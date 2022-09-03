import React from "react";
import styled from "styled-components";
import { Channel } from "../../../../models/content";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

import Label from "../../../primitives/Label";
import Button from "../../../primitives/Button";
import Spinner from "../../../primitives/Spinner";
import List from "../../../content/List";
import Tabs from "../../../primitives/Tabs";
import AddTag from "../../../primitives/AddTag";

const NODE_ROUTE = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 1: 2;
const BASE_URL = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "" : "/collectSounds/";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Top = styled.div`
  background: ${ ({ theme }) => theme.colors.bgSecondary };
  padding-bottom: ${ ({ theme }) => `${ theme.font.primary.size*1.1 + theme.gaps.small*2 }rem`};
  margin-bottom: ${ ({ theme }) => `-${ theme.font.primary.size*1.1 + theme.gaps.small*2 }rem`};
`;

const Info = styled.div`
  background: ${ ({ theme }) => theme.colors.bgSecondary };
  padding: ${ ({ theme }) => `0 ${ theme.gaps.big }rem ${ theme.gaps.big }rem` };
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem`};
  margin: auto;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const Img = styled.img`
  height: ${ ({ theme }) => `${ theme.thumbnail.height }rem` };
  border-radius: 50%;
  overflow: hidden;
`;

const TabsContainer = styled.div`
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem`};
  width: 100%;
  margin: auto;
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
  channel: Channel;
  toggleSaved: Function;
  saved: boolean;
}

const Content: React.FC<Props> = ( props: Props ) => {
  const navigate = useNavigate();
  const intl = useIntl();

  const tab = ( index: number ) => {
    const stringified = queryString.stringify( { index } );
    window.history.pushState('', '', `${ window.location.origin }${ window.location.pathname }?${ stringified }` );
  };

  const videos = props.channel.videos ? <List items={ props.channel.videos.map( item => ({
    content: item.item,
    callback: () => navigate( `${ BASE_URL || '/' }${ window.location.pathname.split( '/' )[NODE_ROUTE] }/video/${ item.id }` )
  })) } emptyMessage={ intl.formatMessage({ id: 'emptyVideos' }) }/> : <SpinnerContainer><Spinner/></SpinnerContainer>;

  const playlists = props.channel.playlists ? <List items={ props.channel.playlists.map( item => ({
    content: item.item,
    callback: () => navigate( `${ BASE_URL || '/' }${ window.location.pathname.split( '/' )[NODE_ROUTE] }/playlist/${ item.id }` )
  })) } emptyMessage={ intl.formatMessage({ id: 'emptyPlaylists' }) }/> : <SpinnerContainer><Spinner/></SpinnerContainer>;

  const tabs = [
    props.channel.description && props.channel.description.length > 0 && {
      label: intl.formatMessage({ id: 'about' }),
      content: <Label text={ props.channel.description } />
    },
    {
      label: intl.formatMessage({ id: 'videos' }),
      content: videos
    },
    {
      label: intl.formatMessage({ id: 'playlists' }),
      content: playlists
    }
  ];

  return (
    <Container>
      <Top>
        <Info>
          <Main>
            <Left>
                <Img
                  src={ props.channel.thumbnails.standard?.url || props.channel.thumbnails.default?.url || '' }
                />
              <Label text={ props.channel.title }/>
            </Left>
            <Button
              callback={ props.toggleSaved } pic="playlist"
              active={ props.saved }
            />
          </Main>
          <AddTag item={ props.channel }/>
        </Info>
      </Top>
      <TabsContainer>
        <Tabs tabs={ tabs } onChange={ tab } active={ +queryString.parse( location.search ).index || 0 }/>
      </TabsContainer>
    </Container>
  );
}

export default Content;