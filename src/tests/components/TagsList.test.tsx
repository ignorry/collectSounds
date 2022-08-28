import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../lib/styled/global";
import { getTheme } from "../../lib/theme";
import store from "../../redux";
import { addItem } from "../../redux/slices/saved";
import { Video } from "../../models/content";
import { Provider } from "react-redux";

import TagsList from "../../components/primitives/TagsList";

const AllTheProviders = ( { children }: any ) => (
  <ThemeProvider theme={ getTheme( true ) } >
    { children }
    <GlobalStyles/>
  </ThemeProvider>
);

describe( 'test TagsList', () => {
  it( 'display all tags', async () => {
    render(
      <TagsList tags={['first', 'second']} />,
      { wrapper: AllTheProviders }
    );

    expect( screen.getByText( 'first' ) ).toBeDefined();
    expect( screen.getByText( 'second' ) ).toBeDefined();
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <TagsList tags={['first', 'second']} />,
      { wrapper: AllTheProviders }
    );

    expect( result ).toMatchSnapshot();
  });
});