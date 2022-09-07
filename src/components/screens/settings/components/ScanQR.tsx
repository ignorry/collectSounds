import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../../redux/slices/errorMessage";
import { addConnectedPeer } from "../../../../redux/slices/options";
import { syncPeers } from "../../../../redux/middleware/syncPeers";

import Collapse from "../../../primitives/Collapse";
import Label from "../../../primitives/Label";

const Container = styled.div`
  & > div {
    padding: 0;
  }
`;

const CollapseContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  padding: ${ ({ theme }) => `0 ${ theme.gaps.big }rem` };
  max-width: ${ ({ theme }) => `${ theme.codeWidth }rem` };
  color: ${ ({ theme }) => theme.colors.font };
  text-align: center;
  word-break: break-all;
`;

const Code = styled.div<{ width: number}>`
  position: relative;
  overflow: hidden;
  height: ${ props => `${ props.width }px` };
  background-color: ${ ({ theme }) => theme.colors.bgSecondary };
  max-width: ${ ({ theme }) => `${ theme.codeWidth }rem` };
  border-radius: ${ ({ theme }) => `${ theme.decorative.borderRadius }px` };
`;

const ScannerWrapper = styled.div`
  position: absolute;
  top: ${ ({ theme }) => `-${ theme.qrfade.hiddenSize }%` };
  right: ${ ({ theme }) => `-${ theme.qrfade.hiddenSize }%` };
  bottom: ${ ({ theme }) => `-${ theme.qrfade.hiddenSize }%` };
  left: ${ ({ theme }) => `-${ theme.qrfade.hiddenSize }%` };
`;

const Figure = styled.div`
  position: absolute;
  background-color: ${ ({ theme }) => theme.qrfade.fadeColor };
  opacity: ${ ({ theme }) => theme.qrfade.opacity };
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  clip-path: ${ ({ theme }) => { const min = theme.qrfade.fadeWidth + '%'; const max = 100 - theme.qrfade.fadeWidth + '%';
    return `
      polygon( 0 0, 100% 0, 100% 100%, 0 100%, 0 ${min}, ${min} ${min}, ${min} ${max}, ${max} ${max}, ${max} ${min}, 0 ${min} )
    `; 
  }};
`;

const ScanQR: React.FC = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const thumbnailRef: React.MutableRefObject<undefined | HTMLDivElement> = useRef();
  const [videoWidth, setVideoWidth] = useState<number>( 0 );
  const [result, setResult] = useState<string | null>( null );
  
  useEffect( () => {
    setVideoWidth( thumbnailRef.current ? thumbnailRef.current.getBoundingClientRect().width : 0 );
  }, [thumbnailRef]);

  const handleError = ( err: any ) =>
    err && dispatch( setMessage( intl.formatMessage({ id: 'scanError' }) ) );

  const handleUpdate = ( err: any, data: any ) => {
    if ( data && data.text && data.text.length === 64 && /^collectS[a-zA-Z0-9]*/.test( data.text ) ) {
      dispatch( setMessage( intl.formatMessage({ id: 'syncronized' }) ) );
      dispatch( addConnectedPeer( data.text ) );
      setResult( data.text );
      setTimeout( () => {
        window.location.reload();
      }, 1000);
    }
  }

  return (
    <Container>
      <Collapse label={ intl.formatMessage({ id: 'scanQR' }) } icon="camera">
        <CollapseContent>
          <Code ref={ thumbnailRef } width={ videoWidth }>
            <ScannerWrapper>
              <BarcodeScannerComponent
                onUpdate={ handleUpdate }
                onError={ handleError }
              />
            </ScannerWrapper>
            <Figure />
          </Code>

          <Label text={ result || intl.formatMessage({ id: 'scanQrCode'}) }/>
        </CollapseContent>
      </Collapse>
    </Container>
  );
}

export default ScanQR;