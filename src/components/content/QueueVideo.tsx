import React from "react";
import styled from "styled-components";
import { Video as VideoType } from "../../models/content";
import { getDurationFromMs } from "../../lib/getDuration";

import Range from "../primitives/Range";
import Label from "../primitives/Label";
import Button from "../primitives/Button";

const Container = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${ ({ theme }) => `${ theme.gaps.smallest }rem` };
  padding: ${ ({ theme }) => `${ theme.gaps.big/2 }rem ${ theme.gaps.big }rem` };
  border: none;
`;

const Left = styled.button`
  color: ${ ({ theme }) => theme.colors.font };
  display: flex;
  align-items: center;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  border: none;
`;

const Thumbnail = styled.div`
  height: ${ ({ theme }) => `${ theme.miniThumbnail.height }rem` };
  width: ${ ({ theme }) => `${ theme.miniThumbnail.width }rem` };
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Img = styled.img`
  width: ${ ({ theme }) => `${ theme.miniThumbnail.width }rem` };
`;

const RangeContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: ${ ({ theme }) => `-${ theme.rangeSize }rem` };

  input {
    width: 100%;
  };
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const TitleContainer = styled.div`
  max-height: ${ ({ theme }) => `${ theme.font.primary.size*1.2 }rem` };
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  transform: ${ ({ theme }) => `scale(${ theme.miniThumbnail.scale})` };
  opacity: ${ ({ theme }) => theme.miniThumbnail.opacity };
`;

export type Props = {
  video: VideoType;
  callback: Function;
  deleteCallback: Function;
};

const Video: React.FC<Props> = ( props: Props ) => (
  <Container onClick={ () => props.callback() }>
    <Left>
      <Thumbnail>
        <Img
          src={ props.video.thumbnails.standard?.url || props.video.thumbnails.default?.url || '' }
        />
        { props.video.passed &&
          <RangeContainer>
            <Range value={ props.video.passed } max={ props.video.duration } />
          </RangeContainer>
        }
      </Thumbnail>

      <Info>
        <TitleContainer>
          <Label text={ props.video.title } />
        </TitleContainer>
        <Label text={ getDurationFromMs( props.video.duration ) } secondary/>
      </Info>
    </Left>

    <ButtonContainer>
      <Button pic="trash" callback={ props.deleteCallback }/>
    </ButtonContainer>
  </Container>
);

export default Video;