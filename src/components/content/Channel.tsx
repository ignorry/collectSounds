import React from "react";
import styled from "styled-components";
import { Channel as ChannelType } from "../../models/content";

import Label from "../primitives/Label";
import TagsList from "../primitives/TagsList";

const Container = styled.button`
  color: ${ ({ theme }) => theme.colors.font };
  display: flex;
  align-items: center;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  border: none;
`;

const Thumbnail = styled.div`
  height: ${ ({ theme }) => `${ theme.thumbnail.height }rem` };
  width: ${ ({ theme }) => `${ theme.thumbnail.width }rem` };
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Img = styled.img`
  height: ${ ({ theme }) => `${ theme.thumbnail.height }rem` };
  border-radius: 50%;
  overflow: hidden;
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

export type Props = {
  channel: ChannelType;
  callback: Function;
};

const Video: React.FC<Props> = ( props: Props ) => (
  <Container onClick={ () => props.callback() }>
    <Thumbnail>
      <Img
        src={ props.channel.thumbnails.standard?.url || props.channel.thumbnails.default?.url || '' }
      />
    </Thumbnail>

    <Info>
      <TitleContainer>
        <Label text={ props.channel.title } />
      </TitleContainer>

      <TagsList tags={ props.channel.tags }/>
    </Info>
  </Container>
);

export default Video;