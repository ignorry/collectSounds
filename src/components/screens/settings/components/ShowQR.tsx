import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { QRCodeSVG } from 'qrcode.react';

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
  color: ${ ({ theme }) => theme.colors.main };
  text-align: center;
  word-break: break-all;
`;

const CodeWrapper = styled.div`
  background-color: white;
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  border-radius: ${ ({ theme }) => `${ theme.decorative.borderRadius }px` };
`;

const Code = styled.div`
  width: 100%;
`;

type Props = {
  peer: string
};

const ShowQR: React.FC<Props> = ( props: Props ) => {
  const intl = useIntl();

  const thumbnailRef: React.MutableRefObject<undefined | HTMLDivElement> = useRef();
  const [videoWidth, setVideoWidth] = useState<number>( 0 );
  
  useEffect( () => {
    setVideoWidth( thumbnailRef.current ? thumbnailRef.current.getBoundingClientRect().width : 0 );
  }, [thumbnailRef]);


  return (
    <Container>
      <Collapse label={ intl.formatMessage({ id: 'showQR' }) } icon="qr">
        <CollapseContent>
          <CodeWrapper>
            <Code ref={ thumbnailRef }>
              <QRCodeSVG
                value={ props.peer }
                size={ thumbnailRef.current ? thumbnailRef.current.getBoundingClientRect().width : 0 }
              />
            </Code>
          </CodeWrapper>

          <Label text={ props.peer }/>
        </CollapseContent>
      </Collapse>
    </Container>
  );
}

export default ShowQR;