import React from "react";
import styled from "styled-components";
import { Playlist as PlaylistType } from "../../models/content";
import { getDurationFromMs } from "../../lib/getDuration";

import Label from "../primitives/Label";
import Icon from "../primitives/Icon";

const Container = styled.button`
  color: ${ ({ theme }) => theme.colors.font };
  display: flex;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  border: none;
`;

const Thumbnail = styled.div`
  height: ${ ({ theme }) => `${ theme.thumbnail.size }rem` };
  position: relative;
`;

const Img = styled.img`
  height: ${ ({ theme }) => `${ theme.thumbnail.size }rem` };
`;

const Length = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${ ({ theme }) => theme.thumbnail.infoColor };
  width: ${ ({ theme }) => `${ theme.thumbnail.infoWidth }rem` };
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` } 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const TitleContainer = styled.div`
  max-height: ${ ({ theme }) => `${ theme.font.primary.size*2.2 }rem` };
  overflow: hidden;
`;

const ChannelTitleContainer = styled.div`
  max-height: ${ ({ theme }) => `${ theme.font.secondary.size*1.2}rem`};
  overflow: hidden;
`;

export type Props = {
  playlist: PlaylistType;
  callback: Function;
};

const Playlist: React.FC<Props> = ( props: Props ) => (
  <Container onClick={ () => props.callback() }>
    <Thumbnail>
      <Img
        src={ props.playlist.thumbnails.standard?.url || props.playlist.thumbnails.default?.url || '' }
      />
      <Length>
        <Label text={ props.playlist.videos && props.playlist.videos.size.toString() }/>
        <Icon name="playlistThumbnail"/>
      </Length>
    </Thumbnail>

    <Info>
      <TitleContainer>
        <Label text={ props.playlist.title } />
      </TitleContainer>
      <ChannelTitleContainer>
        <Label text={ props.playlist.channelTitle } secondary/>
      </ChannelTitleContainer>
    </Info>
  </Container>
);

export default Playlist;