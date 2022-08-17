import React from "react";
import styled from "styled-components";
import { Video as VideoType } from "../../models/content";
import { getDurationFromMs } from "../../lib/getDuration";

import Range from "../primitives/Range";
import Label from "../primitives/Label";

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

const RangeContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: ${ ({ theme }) => `-${ theme.rangeSize }rem` };

  input {
    width: 100%;
  };
`;

const Length = styled.span`
  display: block;
  position: absolute;
  right: ${ ({ theme }) => `${ theme.gaps.small }rem` };
  bottom: ${ ({ theme }) => `${ theme.gaps.small }rem` };
  background: ${ ({ theme }) => theme.thumbnail.infoColor };
  padding: 0 ${ ({ theme }) => `${ theme.decorative.padding }px` };
  border-radius: ${ ({ theme }) => `${ theme.decorative.borderRadius }px` };
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
  video: VideoType;
  callback: Function;
};

const Video: React.FC<Props> = ( props: Props ) => (
  <Container onClick={ () => props.callback() }>
    <Thumbnail>
      <Img
        src={ props.video.thumbnails.standard?.url || props.video.thumbnails.default?.url || '' }
      />
      { props.video.passed &&
        <RangeContainer>
          <Range value={ props.video.passed } max={ props.video.duration } />
        </RangeContainer>
      }
      <Length>
        <Label text={ getDurationFromMs( props.video.duration ) } secondary/>
      </Length>
    </Thumbnail>

    <Info>
      <TitleContainer>
        <Label text={ props.video.title } />
      </TitleContainer>
      <ChannelTitleContainer>
        <Label text={ props.video.channelTitle } secondary/>
      </ChannelTitleContainer>
      <Label text={ props.video.publishedAt } secondary/>
    </Info>
  </Container>
);

export default Video;