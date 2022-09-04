import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import styled from "styled-components"
import { useIntl } from "react-intl";
import { setDarkTheme } from "../../../redux/slices/options";

import Button from "../../primitives/Button";
import Label from "../../primitives/Label";
import ShowQR from "./components/ShowQR";
import ScanQR from "./components/ScanQR";
import Conncted from "./components/Connected";

const Container = styled.div`
  margin: auto;
  max-width: ${ ({ theme }) => `${ theme.contentWidth }rem`};
  width: 100%;
  padding: ${ ({ theme }) => `${ theme.gaps.big }rem` };
  display: flex;
  flex-direction: column;
  gap: ${ ({ theme }) => `${ theme.gaps.big }rem` };
`;

const mapState = ( state: any ) => {
  return {
    options: state.options,
  }
}

const connector = connect( mapState );

type Props = ConnectedProps<typeof connector>;

const Component: React.FC<Props> = ( props: Props ) => {
  const intl = useIntl()
  const dispatch = useDispatch();

  return (
    <Container>
      <Button callback={() => dispatch( setDarkTheme( ! props.options.darkTheme ))} text={ intl.formatMessage({ id: 'theme' }) } pic="theme" />

      <ScanQR/>
      <ShowQR peer={ props.options.peer }/>
      <Conncted peers={ props.options.connectedPeers }/>
    </Container>
  );
}

export default connector( Component );