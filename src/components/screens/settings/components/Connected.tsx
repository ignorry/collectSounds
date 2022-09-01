import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";

import Collapse from "../../../primitives/Collapse";
import Label from "../../../primitives/Label";
import Button from "../../../primitives/Button";
import { useDispatch } from "react-redux";
import { removeConnectedPeer } from "../../../../redux/slices/options";

const Container = styled.div`
  & > div {
    padding: 0;
  }
`;

const Peers = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.small }rem` };
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem 0` };
  border: none;
`;

const Peer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  color: ${ ({ theme }) => theme.colors.font };
  text-align: left;
  word-break: break-all;
`;

const ButtonContainer = styled.div`
  transform: ${ ({ theme }) => `scale(${ theme.miniThumbnail.scale})` };
  opacity: ${ ({ theme }) => theme.miniThumbnail.opacity };
`;

type Props = {
  peers: Array<string>
};

const ScanQR: React.FC<Props> = ( props: Props ) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const thumbnailRef: React.MutableRefObject<undefined | HTMLDivElement> = useRef();
  const [videoWidth, setVideoWidth] = useState<number>( 0 );
  
  useEffect( () => {
    setVideoWidth( thumbnailRef.current ? thumbnailRef.current.getBoundingClientRect().width : 0 );
  }, [thumbnailRef]);


  return (
    <Container>
      <Label text={ intl.formatMessage({ id: 'connected' }) } />

      <Peers>
        { props.peers && props.peers.length ? props.peers.map( ( item, index: number ) => (
          <Peer key={ index }>
            <ButtonContainer>
              <Button pic="trash" callback={() => dispatch( removeConnectedPeer( item ) ) }/>
            </ButtonContainer>

            <Label text={ item } secondary/>
          </Peer>
        )): null }
      </Peers>
    </Container>
  );
}

export default ScanQR;