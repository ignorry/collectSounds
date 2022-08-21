import React from "react"
import { connect, ConnectedProps } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../lib/theme";
import GlobalStyles from "../lib/styled/global";
import { BrowserRouter } from "react-router-dom";

import Root from "./screens/root"

const mapState = ( state: any ) => ({
  isDark: state.options.darkTheme
});

const connector = connect( mapState );

type Props = ConnectedProps<typeof connector>

const App: React.FC<Props> = ( props ) => (
  <BrowserRouter>
    <ThemeProvider theme={ getTheme( props.isDark ) } >
      <Root/>
      <GlobalStyles/>
    </ThemeProvider>
  </BrowserRouter>
);

export default connector( App );