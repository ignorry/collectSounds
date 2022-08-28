import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../lib/styled/global";
import { getTheme } from "../../lib/theme";

import Tags from "../../components/screens/saved/components/Tags";
import store from "../../redux";
import { addItem } from "../../redux/slices/saved";
import { Video } from "../../models/content";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      { children }
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'test getAllTags utils', () => {
  beforeAll( () => {
    store.dispatch( addItem([{
      type: 'video',
      id: 'video',
      tags: ['1']
    } as Video ]));
  });

  it( 'display all tags', async () => {
    render(
      <Tags callback={() => {}} />,
      { wrapper: AllTheProviders }
    );

    expect( screen.getByText( '1' ) ).toBeDefined();
  });

  it( 'matches to snapshot', () => {
    const result = render(
      <Tags callback={() => {}} />,
      { wrapper: AllTheProviders }
    );

    expect( result ).toMatchSnapshot();
  });
});