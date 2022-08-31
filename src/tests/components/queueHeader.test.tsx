import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { BrowserRouter } from "react-router-dom";

import Header from "../../components/screens/queue/components/Header";
import store from "../../redux";
import { addItem as addQueueItem } from "../../redux/slices/queue";
import { Provider } from "react-redux";
import { LangProvider } from "../../lib/localization";
import { addItem } from "../../redux/slices/saved";
import { Video } from "../../models/content";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="queue">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'queueHeader component', () => {
  it( 'display length', async () => {
    const result = render(
      <Header />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    expect( screen.getByText( 'Length: 00' ) ).toBeDefined();
  });

  it( 'handles clean queue click', async () => {
    store.dispatch( addItem([ { type: 'video', id: 'first', duration: 1000 } as Video ]) );
    store.dispatch( addItem([ { type: 'video', id: 'second', duration: 2000 } as Video ]) );

    store.dispatch( addQueueItem( 'first' ) );
    store.dispatch( addQueueItem( 'second' ) );

    const result = render(
      <Header />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelector( 'button' ).click();

    const queue = store.getState().queue.data;

    expect( queue ).toStrictEqual( [] );
  });

  it( 'matches to snapshot', async () => {
    const result = render(
      <Header />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    expect( result ).toMatchSnapshot();
  });
});