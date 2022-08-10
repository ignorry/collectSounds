import React from "react"
import { connect, ConnectedProps } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../lib/theme";
import GlobalStyles from "../lib/styled/global";

const mapState = ( state: any ) => ({
  isDark: state.options.darkTheme
});

const connector = connect( mapState );

type Props = ConnectedProps<typeof connector>

const App: React.FC<Props> = ( props ) => (
  <ThemeProvider theme={ getTheme( props.isDark ) } >
    <div>asdfasdf</div>
    <GlobalStyles/>
  </ThemeProvider>
);

export default connector( App );