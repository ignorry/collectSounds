import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import QrReader from "react-qr-scanner";

import Collapse from "../../../primitives/Collapse";
import Label from "../../../primitives/Label";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../../redux/slices/errorMessage";
import { addConnectedPeer } from "../../../../redux/slices/options";

const Container = styled.div`
  & > div {
    padding: 0;
  }
`;

const Code = styled.div`
  background-color: ${ ({ theme }) => theme.colors.bgSecondary };
  max-width: ${ ({ theme }) => `${ theme.codeWidth }rem` };
  border-radius: ${ ({ theme }) => `${ theme.decorative.borderRadius }px` };
`;

type Props = {
  peer: string
};

const ScanQR: React.FC<Props> = ( props: Props ) => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const thumbnailRef: React.MutableRefObject<undefined | HTMLDivElement> = useRef();
  const [videoWidth, setVideoWidth] = useState<number>( 0 );
  const [result, setResult] = useState<string | null>( null );
  
  useEffect( () => {
    setVideoWidth( thumbnailRef.current ? thumbnailRef.current.getBoundingClientRect().width : 0 );
  }, [thumbnailRef]);

  const handleError = () => {
    dispatch( setMessage( intl.formatMessage({ id: 'scanError' }) ) );
  }

  const handleScan = ( data: string ) => {
    if ( data.length === 64 && /^collectS[a-zA-Z0-9]*/.test( data ) ) {
      dispatch( addConnectedPeer( data ) );
      setResult( data );
    }
  }

  return (
    <Container>
      <Collapse label={ intl.formatMessage({ id: 'scanQR' }) } icon="camera">
        <Code ref={ thumbnailRef }>
          <QrReader
            delay={100}
            style={{
              height: thumbnailRef.current ? thumbnailRef.current.getBoundingClientRect().width : 0,
              width: thumbnailRef.current ? thumbnailRef.current.getBoundingClientRect().width : 0,
            }}
            onError={ handleError }
            onScan={ handleScan }
          />
          <Label text={ result }/>
        </Code>
      </Collapse>
    </Container>
  );
}

export default ScanQR;