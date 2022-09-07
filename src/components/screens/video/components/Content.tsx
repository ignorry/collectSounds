import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Video } from "../../../../models/content";
import { useIntl } from "react-intl";
import { SearchFilters } from "../../../../lib/api";
import { getDurationFromMs } from "../../../../lib/getDuration";

import Range from "../../../primitives/Range";
import Label from "../../../primitives/Label";
import PlayerButton from "../../../primitives/PlayerButton";
import Button from "../../../primitives/Button";
import AddTag from "../../../primitives/AddTag";

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
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const ThumbContainer = styled.div`
  margin: auto;
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem`};
  width: 100%;
  padding: ${ ({ theme }) => `0 ${ theme.gaps.big }rem` };
  
  @media ${ ({ theme }) => theme.media.small } {
    padding: 0;
  }
`;

const Thumbnail = styled.div<{ realWidth: number }>`
  height: ${ props => ({ theme }) => `${ theme.thumbnail.height/theme.thumbnail.width*props.realWidth }px` };
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Img = styled.img`
  width: 100%;
`;

const RangeContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: ${ ({ theme }) => `-${ theme.rangeSize }rem` };

  input {
    width: 100%;
  };
`;

const Play = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: ${ ({ theme }) => `0 ${ theme.gaps.big }rem ${ theme.gaps.big }rem` };
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
`

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${ ({ theme }) => `-${ theme.gaps.small }rem` };
`;

const Description = styled.div`
  margin: auto;
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem`};
  width: 100%;
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

/**
 * @typedef Props
 * @prop {Function} toggleSaved - callback on click saved
 * @prop {boolean} saved - is video saved in store or not
 */
export type Props = {
  video: Video;
  toggleSaved: Function;
  saved: boolean;
}

const Content: React.FC<Props> = ( props: Props ) => {
  const thumbnailRef: React.MutableRefObject<undefined | HTMLDivElement> = useRef();
  const [videoWidth, setVideoWidth] = useState<number>( 0 );
  
  useEffect( () => {
    setVideoWidth( thumbnailRef.current ? thumbnailRef.current.getBoundingClientRect().width : 0 );
  }, [thumbnailRef]);

  return (
    <Container>
      <Main>
        <Column>
          <ThumbContainer>
            <Thumbnail realWidth={ thumbnailRef.current ? thumbnailRef.current.getBoundingClientRect().width : 0 } ref={ thumbnailRef }>
              <Img
                src={ props.video.thumbnails.maxres?.url || props.video.thumbnails.default?.url || '' }
              />
              { props.video.passed &&
                <RangeContainer>
                  <Range value={ props.video.passed } max={ props.video.duration } />
                </RangeContainer>
              }
              <Play>
                <PlayerButton callback={() => {}} pic="play"/>
              </Play>
              <Length>
                <Label text={ getDurationFromMs( props.video.duration ) } secondary/>
              </Length>
            </Thumbnail>
          </ThumbContainer>
          <Info>
            <Label text={ props.video.title }/>
            <Label text={ props.video.channelTitle }/>
            <Line>
              <Label text={ props.video.publishedAt.replace( /[A-Z]/g, ' ' ) } secondary/>
              <Button
                callback={ props.toggleSaved } pic="playlist"
                active={ props.saved }
              />
            </Line>
            <AddTag item={ props.video }/>
          </Info>
        </Column>
      </Main>
      <Description>
        <Label text={ props.video.description }/>
      </Description>
    </Container>
  );
}

export default Content;