import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Thumbnails } from "../../models/api/primitives";
import { Video, Playlist, Channel } from "../../models/content";
import { Provider } from "react-redux";
import { LangProvider } from "../../lib/localization";
import store from "../../redux/index";

import ActionWrapper, { Props as ActionWrapperProps } from "../../components/content/ActionWrapper";

const AllTheProviders = ( { children }: any ) => (
    <ThemeProvider theme={ getTheme( true ) } >
      { children }
      <GlobalStyles/>
    </ThemeProvider>
);

describe( 'ActionWrapper component', () => {

  it( 'matches to snapshot', () => {
    const result = render(
      <ActionWrapper
        left={{
          label: 'left',
          callback: () => {}
        }}
        right={{
          label: 'right',
          callback: () => {}
        }}
        callback={() => {}}
      >
        some child
      </ActionWrapper>,
      { wrapper: AllTheProviders }
    );

    expect( result ).toMatchSnapshot();
  });
});