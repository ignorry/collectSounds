import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../lib/theme";
import GlobalStyles from "../../lib/styled/global";
import { Provider } from "react-redux";
import store from "../../redux/index";
import { LangProvider } from "../../lib/localization";
import { BrowserRouter } from "react-router-dom";
import { SearchResponse } from "../../models/api/search";
import { VideoIdResponse } from "../../models/api/video";

import SearchQueries from "../../components/screens/search/components/SearchQueries";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="root">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'SearchQueries Component', () => {
  it( 'renders correctly', async () => {
    const result = render(
      <SearchQueries queries={{}} callback={() => {}}/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    const button = result.container.querySelector( 'button' );

    expect( button ).toBeTruthy();
  });

  it( 'handles click on search button', async () => {
    const callback = jest.fn();

    const result = render(
      <SearchQueries queries={{}} callback={callback}/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'handles click on search button with specified filters', async () => {
    const callback = jest.fn();

    const result = render(
      <SearchQueries queries={{
        q: 'q',
        type: 'video',
        videoDuration: 'short'
      }} callback={callback}/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelector( 'button' ).click();

    expect( callback ).toBeCalled();
  });

  it( 'matches to snapshot', async () => {
    const result = render(
      <SearchQueries queries={{}} callback={() => {}} />,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 10 ) );

    expect( result ).toMatchSnapshot();
  });
});