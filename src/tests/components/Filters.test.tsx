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

import Filters from "../../components/screens/saved/components/Filters";

const AllTheProviders = ( { children }: any ) => (
  <Provider store={store}>
    <ThemeProvider theme={ getTheme( true ) } >
      <BrowserRouter>
        <LangProvider file="saved">
          { children }
        </LangProvider>
      </BrowserRouter>
      <GlobalStyles/>
    </ThemeProvider>
  </Provider>
);

describe( 'Filters Component', () => {
  it( 'renders correctly', async () => {
    const result = render(
      <Filters queries={{}} callback={() => {}} isVideo={false}/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    const input = result.container.querySelector( 'input' );

    expect( input ).toBeTruthy();
  });

  it( 'handles change of input', async () => {
    const callback = jest.fn();

    const result = render(
      <Filters queries={{}} callback={callback} isVideo={false}/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    result.container.querySelector( 'input' ).dispatchEvent( new InputEvent( 'change' ) );

    expect( callback ).toBeCalled();
  });

  it( 'renders with filters', async () => {
    const result = render(
      <Filters queries={{
        q: 'q',
        order: 'title',
        type: 'video',
        duration: 'short',
        tag: 'tag'
      }} callback={() => {}} isVideo={true}/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 100 ) );

    const input = result.container.querySelector( 'input' );

    expect( input ).toBeTruthy();
  });

  it( 'matches to snapshot', async () => {
    const result = render(
      <Filters queries={{}} callback={() => {}} isVideo={false}/>,
      { wrapper: AllTheProviders }
    );

    await new Promise( resolve => setTimeout( resolve, 10 ) );

    expect( result ).toMatchSnapshot();
  });
});